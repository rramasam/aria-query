/**
 * @flow
 */
const gridcellRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-readonly': null,
    'aria-required': null,
    'aria-selected': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'td',
        attributes: [
          {
            name: 'role',
            value: 'gridcell',
          },
        ],
      },
    },
  ],
  requireContextRole: [
    'row',
  ],
  requiredContextRole: [
    'row',
  ],
  requiredOwnedElements: [],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
      'cell',
    ],
    [
      'roletype',
      'widget',
    ],
  ],
};

export default gridcellRole;