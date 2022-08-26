import { IComponent } from '~e2e/app/scenarios/types';
import { createScenarioForSingleValueProp } from '~e2e/app/scenarios/utils';

export default {
  critical: false,
  scenarios: [
    createScenarioForSingleValueProp('height', 200),
    createScenarioForSingleValueProp('width', 200),
    createScenarioForSingleValueProp('square', true),
    createScenarioForSingleValueProp('boneHalf', true),
  ]
} as IComponent;
