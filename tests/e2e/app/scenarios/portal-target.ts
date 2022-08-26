import { IComponent } from '~e2e/app/scenarios/types';
import { createCustomScenario } from '~e2e/app/scenarios/utils';

const renderFn = (propsTarget, propsPortal, defaultSlot) => (h, component, components) => h(
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
        props: { ...propsTarget },
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
        props: { ...propsPortal },
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
    createCustomScenario('prop', 'name', renderFn({
      name: 'destination'
    }, {
      to: 'destination',
    }, 'Этот текст должен появится в div с красным border')),
    createCustomScenario('prop', 'slim', renderFn({
      name: 'destination',
      slim: true,
    }, {
      to: 'destination',
      disabled: true,
    }, 'Этот текст должен остаться в div с зеленым border'),
    {
      description: 'without slim in OzPortal'
    }),
    createCustomScenario('prop', 'slim', renderFn({
      name: 'destination',
      slim: true,
    }, {
      to: 'destination',
      disabled: true,
      slim: true,
    }, 'Этот текст должен быть не в div и без border'),
    {
      description: 'with slim in OzPortal'
    })
  ]
} as IComponent;
