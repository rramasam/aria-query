/**
 * @flow
 */
const docBacklinkRole: ARIARoleDefinition = {
  abstract: false,
  accessibleNameRequired: true,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: [
    'author',
    'content',
  ],
  props: {},
  relatedConcepts: [
    {
      module: 'EPUB',
      concept: {
        name: 'referrer [EPUB-SSV]',
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
      'widget',
      'command',
      'link',
    ],
  ],
};

export default docBacklinkRole;