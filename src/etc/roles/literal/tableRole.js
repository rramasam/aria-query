/**
 * @flow
 */
const tableRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
  ],
  props: {
    'aria-colcount': null,
    'aria-rowcount': null,
  },
  relatedConcepts: [
    {
      module: 'HTML',
      concept: {
        name: 'table',
      },
    },
  ],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [
    [
      'row',
    ],
    [
      'rowgroup',
      'row',
    ],
  ],
  requiredProps: {},
  superClass: [
    [
      'roletype',
      'structure',
      'section',
    ],
  ],
};

export default tableRole;