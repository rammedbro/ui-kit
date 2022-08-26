import Vue from 'vue';
import * as components from '@/index';
import scenarios from '~e2e/app/scenarios';
import '~/directives/qa';
import '~/directives/body-scroll-lock';
import '~/assets/styles/fonts.css';
import '~/assets/styles/variables/index.css';
import '~/assets/styles/tokens/typography-desktop.css';
import '~/assets/styles/variables/light.css';

export default function createApp(context: any) {
  const warnings = [];

  // Warning capturing
  Vue.config.warnHandler = function (msg, vm, trace) {
    warnings.push({ name: 'Warning', message: msg, stack: trace });
  };

  const app = new Vue({
    data: () => ({
      warnings,
      errors: [],
    }),
    errorCaptured(e: Error, vm, info) {
      // Client error capturing
      const { name, message, stack } = e;
      this.errors.push({ name, message, stack, info });
    },
    mounted() {
      if (this.warnings.length) {
        const json = JSON.stringify(this.warnings, null, 2);
        this.$el.insertAdjacentHTML('beforeend', `<pre id="warnings">${json}</pre>`);
      }

      if (this.errors.length) {
        const json = JSON.stringify(this.errors, null, 2);
        this.$el.insertAdjacentHTML('beforeend', `<pre id="client-errors">${json}</pre>`);
      }
    },
    render(h) {
      const [component, scenarioLabel] = (context.path || '')
        .split('/')
        .filter(item => item)
        .slice(1);
      let children = [];

      if (component === undefined) {
        children = Object.entries(scenarios).map(([component, { scenarios }]) => {
          const li = scenarios.map((scenario) => {
            const encodedLabel = encodeURI(scenario.label);
            return h('li', {}, [
              h('a', { attrs: { href: `${component}/${encodedLabel}` } }, scenario.label)
            ]);
          });
          return h('div', {}, [
            h('h1', {}, component),
            h('ol', {}, li)
          ]);
        });
      } else if (component in scenarios) {
        const decodedScenarioLabel = decodeURI(scenarioLabel);
        const scenario = scenarios[component].scenarios.find(item => item.label === decodedScenarioLabel);

        if (!scenario) {
          throw new Error(
            `Scenario for ${component} with label '${decodedScenarioLabel}' doesn't exist`
          );
        }

        const scenarioResult = scenario.renderFn(h, component, components);

        children = Array.isArray(scenarioResult)
          ? scenarioResult
          : [scenarioResult];
      } else {
        throw new Error(`Component ${component} doesn't exist`);
      }

      return h('div', {
        attrs: {
          id: 'app',
        },
        style: {
          fontFamily: 'var(--mainFont)'
        }
      }, children);
    }
  });

  return { app };
}
