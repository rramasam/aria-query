/**
 * @flow
 */
const sliderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: true,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-orientation': 'horizontal',
    'aria-readonly': null,
    'aria-valuemax': '100',
    'aria-valuemin': '0',
    'aria-valuenow': '50',
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'input',
        attributes: [
          {
            name: 'type',
            value: 'range',
          },
        ],
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {
    'aria-valuemax': '100',
    'aria-valuemin': '0',
    'aria-valuenow': '50',
  },
  superClass: [
    [
      'roletype',
      'widget',
      'input',
    ],
    [
      'roletype',
      'widget',
      'range',
    ],
  ],
};

export default sliderRole;