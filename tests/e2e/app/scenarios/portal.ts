import { IComponent } from '~e2e/app/scenarios/types';
import { createCustomScenario } from '~e2e/app/scenarios/utils';

const renderFn = (props, defaultSlot) => (h, component, components) => h(
  'div',
  {
    style: {
      border: '1px solid black',
      padding: '12px',
    }
  },
  [
    h(
      components['OzPortalTarget'],
      {
        props: {
          name: 'destination'
        },
        style: {
          border: '1px dashed red',
          padding: '12px',
          marginBottom: '12px'
        }
      }
    ),
    h(
      components['OzPortal'],
      {
        props,
        style: {
          border: '1px dashed green',
          padding: '12px',
        }
      },
      defaultSlot
    )
  ]
);

export default {
  critical: false,
  scenarios: [
    createCustomScenario('prop', 'to', renderFn({
      to: 'destination'
    }, 'Этот текст должен появится в div с красным border')),
    createCustomScenario('prop', 'disabled', renderFn({
      to: 'destination',
      disabled: true,
    }, 'Этот текст должен остаться в div с зеленым border')),
    createCustomScenario('prop', 'slim', renderFn({
      to: 'destination',
      disabled: true,
      slim: true,
    }, 'Этот текст должен быть не в div и без border'))
  ]
} as IComponent;
