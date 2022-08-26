import { action } from '@storybook/addon-actions';
import lodash from 'lodash';
import '~/directives/qa';
import '~/directives/body-scroll-lock';
import '~/assets/styles/variables/index.css';
import '~/assets/styles/tokens/typography-desktop.css';
import '~/assets/styles/variables/light.css';
import '~/assets/styles/classes/typography-desktop.css';
// import '~/assets/styles/classes/typography-mobile.css'; // подумать на тему, поисследовать вопрос подключения мобильной версии шрифтов (цветов).

const sbComponentsSectionOrder = [];
// eslint-disable-next-line no-undef
SB_COMPONENTS_STORIES.forEach(name => {
  const formattedName = 'Oz' + name
    .split('-')
    .map(part => lodash.upperFirst(part))
    .join('');

  sbComponentsSectionOrder.push(formattedName, ['Overview', 'Properties', 'Events', 'Stories']);
});

export const parameters = {
  /**
   * Регистрирует action для каждого $emit в коде, имя события которого
   * начинается с on.
   */
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  readme: {
    codeTheme: 'github',
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Introduction',
        ['Разработка', 'Документирование компонентов', 'Добавление в storybook'],
        'Design System',
        'Common',
        'DS Components',
        'Components',
        sbComponentsSectionOrder,
      ],
    },
  },
  docs: {
    /**
     * Превью кода для функциональных компонентов
     */
    transformSource: (sourceCode, context) => {
      const { component, args } = context.parameters;

      if (!component.functional) {
        return sourceCode;
      }

      const storyTemplateFunc = context.getOriginal();
      context.argsGrouped = {
        props: {},
        events: {},
        slots: {},
      };

      const { template } = storyTemplateFunc(args, context);
      const stringOfArgs = Object.entries(args)
        .map(([key, value]) => {
          switch (typeof value) {
            case 'string':
              return `${key}="${value}"`;
            case 'boolean':
              return value ? key : '';
            default:
              return `:${key}="${value}"`;
          }
        })
        .join(' ');

      return template
        .replace('v-bind="$props"', stringOfArgs)
        .replace('v-on="argsGrouped.events"', '');
    },
  },
};

export const decorators = [
  /*
   * Декоратор для группировки параметров для дальнейшего использования в одну строку.
   */
  (story, context) => {
    const { args, argTypes } = context;
    const argsGrouped = {
      props: {},
      events: {},
      slots: {},
      inject: {},
    };

    Object.entries(argTypes).forEach(([key, argType]) => {
      const name = argType.name;

      if (!argType.table) return;

      const category = argType.table.category;
      argsGrouped[category][name] = args[key];
    });

    context.argsGrouped = argsGrouped;

    return {
      template: '<story/>',
    };
  },
  /*
   * Декоратор для определения контролов
   */
  (story, context) => {
    const { argTypes, parameters } = context;
    const { __docgenInfo: info } = parameters.component;

    if (info && info.props) {
      const controlProps = info.props.filter(prop => prop.tags && prop.tags.control);
      controlProps.forEach(prop => {
        const { description } = prop.tags.control[0];
        const type = argTypes[prop.name];

        type.control.type = description;
      });

      const selectProps = info.props.filter(prop => 'values' in prop);
      selectProps.forEach(prop => {
        const type = argTypes[prop.name];

        type.control.type = 'select';
        type.options = prop.values;
      });
    }

    Object.values(argTypes).forEach(argType => {
      if (!argType.table) return;

      if (argType.table.category === 'slots') {
        argType.control = { type: 'text' };
      }

      if (argType.table.type && argType.table.type.summary === 'function') {
        argType.control = { type: 'object' };
      }
    });

    return {
      template: '<story/>',
    };
  },
  /*
   * Декоратор регистрации action для любого $emit в коде
   */
  (story, context) => {
    const { args, argTypes } = context;

    Object.values(argTypes).forEach(argType => {
      if (argType.table && argType.table.category === 'events') {
        const { name } = argType;
        const handler = action(name);

        argType.action = name;
        argType.defaultValue = handler;
        args[name] = handler;
      }
    });

    return {
      template: '<story/>',
    };
  },
  /*
   * Декоратор для определения inject свойств
   */
  (story, context) => {
    const { argTypes } = context;

    Object.values(argTypes).forEach(argType => {
      if (argType.name.startsWith('[INJECT]:')) {
        argType.name = argType.name.replace(/\[INJECT]:/, '');
        argType.table.category = 'inject';
      }
    });

    return {
      template: '<story/>',
    };
  },
];
