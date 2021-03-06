/**
 * @flow
 */
const rowheaderRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'contents',
  ],
  props: {
    'aria-sort': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'th',
        attributes: [
          {
            name: 'scope',
            value: 'row',
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
      'structure',
      'section',
      'cell',
      'gridcell',
    ],
    [
      'roletype',
      'widget',
      'gridcell',
    ],
    [
      'roletype',
      'structure',
      'sectionhead',
    ],
  ],
};

export default rowheaderRole;