import { Component, CreateElement, VNode } from 'vue';

interface IComponent {
  critical: boolean;
  scenarios: IScenario[];
}

type TScenarioRenderFn = (
  h: CreateElement,
  component: string,
  components: Record<string, Component>
) => VNode | VNode[];

interface IScenario {
  label: string;
  renderFn: TScenarioRenderFn;
  suites?: string[];
}
