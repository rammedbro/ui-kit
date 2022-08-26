import { IScenario, TScenarioRenderFn } from '~e2e/app/scenarios/types';
import { ScopedSlotReturnValue, VNodeChildren, VNodeData } from 'vue/types/vnode';
import { merge, upperFirst } from 'lodash';
import { Component, CreateElement, VNode } from 'vue';

// Wrap in function if it's originally not a function
function guaranteeFn<T, K>(payload: T | ((...args: any) => T), fallback?: T): (...args: any) => T {
  return typeof payload === 'function'
    ? <(...args: any) => T>payload
    : () => payload || fallback;
}

// Wrap in array if it's originally not an array
function guaranteeArray<T>(payload: T | T[]): T[] {
  return Array.isArray(payload)
    ? payload
    : [payload];
}

// Make VNodes for slots
function makeNodesForSlots(
  h: CreateElement,
  slots: ReturnType<TScenarioSlotsFn>,
): (VNode | VNodeChildren)[] {
  return Object
    .entries(slots)
    .map(([slot, value]) =>
      h('template', { slot }, guaranteeArray(value)));
}

type TScenarioVueDataFn = (h: CreateElement, components: Record<string, Component>) => VNodeData;
type TScenarioVueData = VNodeData | TScenarioVueDataFn;

type TScenarioSlotsFn = (h: CreateElement, components: Record<string, Component>) => Record<string, VNode | VNodeChildren>;
type TScenarioSlots = Record<string, VNode | VNodeChildren> | TScenarioSlotsFn;

type TScenarioSlotFn = (h: CreateElement, components: Record<string, Component>) => VNode | VNodeChildren;
type TScenarioSlot = (VNode | VNodeChildren) | TScenarioSlotFn;

type TScenarioScopedSlotFn = (h: CreateElement, components: Record<string, Component>, props: any) => ScopedSlotReturnValue;

interface ICreateScenarioOptions {
  description?: string;
  suites?: string[];
  vueData?: TScenarioVueData;
  slots?: TScenarioSlots;
}

export function createScenarioForSingleValueProp(
  prop: string,
  value: unknown,
  options: ICreateScenarioOptions = {},
): IScenario {
  const { description, vueData, slots, suites } = options;
  const vueDataFn = guaranteeFn(vueData, {});
  const slotsFn = guaranteeFn(slots, {});

  const label = `Prop - ${prop}` + (description ? ` (${description})` : '');
  const renderFn = (h, component, components) => h(
    components[component],
    merge(vueDataFn(h, components), {
      props: {
        [prop]: value
      }
    }),
    makeNodesForSlots(h, slotsFn(h, components))
  );

  return { label, renderFn, suites };
}

export function createScenarioForMultipleValueProp<T>(
  prop: string,
  values: T[] | Record<string, T>,
  options?:
    ICreateScenarioOptions |
    ((item: T, index: number) => Pick<ICreateScenarioOptions, 'vueData' | 'slots'>),
  callbackCaseOptions?: Pick<ICreateScenarioOptions, 'description' | 'suites'>,
): IScenario {
  const { description, suites } = typeof options === 'function'
    ? (callbackCaseOptions || {})
    : (options || {});
  const arValues = Array.isArray(values) ? values : Object.values(values);

  const label = `Prop - ${prop}` + (description ? ` (${description})` : '');
  const renderFn = (h, component, components) =>
    arValues.map((value, index) => {
      const optionsFn = guaranteeFn(options, {});
      const { vueData, slots } = optionsFn(value, index);
      const vueDataFn = guaranteeFn(vueData, {});
      const slotsFn = guaranteeFn(slots, {});

      return h(
        'div',
        {
          // Need for avoiding overlaps because it can confuse screenshot testing
          style: {
            margin: '12px',
          }
        },
        [h(
          components[component],
          merge(vueDataFn(h, components), {
            props: {
              [prop]: value
            }
          }),
          makeNodesForSlots(h, slotsFn(h, components))
        )],
      );
    });

  return { label, renderFn, suites };
}

export function createScenarioForSlot(
  slot: string,
  value: TScenarioSlot,
  options: ICreateScenarioOptions = {},
): IScenario {
  const { description, vueData, slots, suites } = options;
  const vueDataFn = guaranteeFn(vueData, {});
  const slotsFn = guaranteeFn(slots, {});

  const label = `Slot - ${slot}` + (description ? ` (${description})` : '');
  const renderFn = (h, component, components) =>
    h(
      components[component],
      vueDataFn(h, components),
      [
        h('template', { slot }, guaranteeArray(
          typeof value === 'function' ? value(h, components) : value)
        ),
        ...makeNodesForSlots(h, slotsFn(h, components))
      ]
    );

  return { label, renderFn, suites };
}

export function createScenarioForScopedSlot(
  slot: string,
  value: TScenarioScopedSlotFn,
  options: ICreateScenarioOptions = {},
): IScenario {
  const { description, vueData, slots, suites } = options;
  const vueDataFn = guaranteeFn(vueData, {});
  const slotsFn = guaranteeFn(slots, {});

  const label = `ScopedSlot - ${slot}` + (description ? ` (${description})` : '');
  const renderFn = (h, component, components) =>
    h(
      components[component],
      merge(vueDataFn(h, components), {
        scopedSlots: {
          [slot]: (props) => value(h, components, props),
        }
      }),
      makeNodesForSlots(h, slotsFn(h, components))
    );

  return { label, renderFn, suites };
}

export function createCustomScenario(
  type: 'prop' | 'slot',
  name: string,
  renderFn: TScenarioRenderFn,
  options: Pick<ICreateScenarioOptions, 'description' | 'suites'> = {}
): IScenario {
  const { description, suites } = options;
  const label = `${upperFirst(type)} - ${name}` + (description ? ` (${description})` : '');

  return { label, renderFn, suites };
}
