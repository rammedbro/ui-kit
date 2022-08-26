import { IComponent } from '~e2e/app/scenarios/types';
import { createCustomScenario } from '~e2e/app/scenarios/utils';

const renderFn = (propsMounting, defaultSlot) => (h, component, components) => h(
  'div',
  {
    style: {
      border: '1px solid black',
      padding: '12px',
    }
  },
  [
    h(
      'header',
      {
        style: {
          border: '1px dashed red',
          padding: '12px',
          marginBottom: '12px'
        }
      }
    ),
    h(
      components['OzPortalMounting'],
      {
        props: { ...propsMounting },
        style: {
          border: '1px dashed green',
          padding: '12px',
          marginBottom: '12px'
        }
      },
      defaultSlot
    ),
    h(
      'footer',
      {
        style: {
          border: '1px dashed blue',
          padding: '12px',
          marginBottom: '12px'
        }
      },
    ),
  ]
);

export default {
  critical: false,
  scenarios: [
    createCustomScenario('prop', 'name', renderFn({
      name: 'destination',
      mountTo: 'header',
    }, 'Этот текст должен появится в div с красным border')),
    createCustomScenario('prop', 'mountTo', renderFn({
      mountTo: 'footer',
    }, 'Этот текст должен появится в div с синим border')),
    createCustomScenario('prop', 'append', renderFn({
      mountTo: 'footer',
      append: true,
    }, 'Этот текст должен появится в div с синим border')),
  ]
} as IComponent;
