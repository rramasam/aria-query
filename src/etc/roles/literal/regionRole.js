/**
 * @flow
 */
const regionRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {},
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'frame',
      },
    },
    {
      concept: {
        name: 'Device Independence Glossart perceivable unit',
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'section',
        attributes: [
          {
            name: 'aria-label',
            constraints: [
              'set',
            ],
          },
        ],
      },
    },
    {
      module: 'HTML',
      concept: {
        name: 'section',
        attributes: [
          {
            name: 'aria-labelledby',
            constraints: [
              'set',
            ],
          },
        ],
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'landmark',
    ],
  ],
};

export default regionRole;