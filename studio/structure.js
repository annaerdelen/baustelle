import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { FiCircle, FiFileText, FiSettings, FiSidebar, FiSquare, FiHome, FiInfo } from 'react-icons/fi';

export const structure = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Guide').icon(FiInfo).child(S.editor().schemaType('guide').documentId('guide')),
      S.listItem().title('Global Settings').icon(FiSettings).child(S.editor().schemaType('global').documentId('global')),
      S.divider(),
      S.listItem().title('Homepage').icon(FiHome).child(S.editor().schemaType('homepage').documentId('homepage')),
      // S.listItem().title('Test').icon(FiHome).child(S.editor().schemaType('testPage').documentId('testPage')),
      S.listItem()
        .title('Work')
        .icon(FiCircle)
        .child(
          S.list()
            .title('Work')
            .items([
              S.listItem().title('Projects Overview').icon(FiSidebar).child(S.editor().schemaType('projectsOverview').documentId('projectsOverview')),
              orderableDocumentListDeskItem({
                type: 'project',
                title: 'Projects',
                icon: FiSquare,
                S,
                context,
              }),
            ]),
        ),
      S.listItem().title('Pages').icon(FiSidebar).child(S.documentTypeList('page').title('Pages')),
      S.listItem().title('Legal').icon(FiFileText).child(S.editor().schemaType('legal').documentId('legal')),
    ]);
