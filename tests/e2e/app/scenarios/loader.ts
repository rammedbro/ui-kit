import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForMultipleValueProp, createCustomScenario } from '~e2e/app/scenarios/utils';

const renderFn = (props) => (h, component, components) => h(
  'div',
  {
    style: { color: 'var(--ozCtrlPrimary)' }
  },
  [
    h(components['OzLoader'], { props })
  ]
);

export default {
  critical: false,
  scenarios: [
    createScenarioForMultipleValueProp('size', ['s', 'm', 'l']),
    createCustomScenario('prop', 'size', renderFn({
      size: 's',
    }), {
      description: 'Size \'s\' with color',
    }),
    createCustomScenario('prop', 'size', renderFn({
      size: 'm',
    }), {
      description: 'Size \'m\' with color',
    }),
    createCustomScenario('prop', 'size', renderFn({
      size: 'l',
    }), {
      description: 'Size \'l\' with color',
    }),
  ]
} as IComponent;
