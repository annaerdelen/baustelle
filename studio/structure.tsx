import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import { FiCircle, FiFileText, FiSettings, FiSidebar, FiSquare, FiHome, FiInfo, FiLink } from 'react-icons/fi';
import { Iframe } from 'sanity-plugin-iframe-pane';
import { StructureBuilder, StructureResolverContext } from 'sanity/structure';

const getPreviewUrl = (doc: { _type: string; slug?: { current: string } }) => {
  const previewUrl = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'; //TODO

  let slug;

  switch (doc._type) {
    case 'homepage':
      slug = '';
      break;
    case 'project':
      slug = '/work/' + doc.slug?.current;
      break;
    default:
      slug = '/' + (doc.slug?.current || '');
  }

  return `${previewUrl}${slug}?preview=true`;
};

const views = (S: StructureBuilder) => [
  S.view.form(),
  S.view
    .component(Iframe)
    .options({
      url: getPreviewUrl,
      reload: { button: true },
    })
    .title('Preview'),
];

export const defaultDocumentNode = (S: StructureBuilder, options: { schemaType: string }) => {
  if (options.schemaType === 'footer') {
    return S.document();
  }

  return S.document().views(views(S));
};

export const structure = (S: StructureBuilder, context: StructureResolverContext) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title('Guide').icon(FiInfo).child(S.editor().schemaType('guide').documentId('guide')),
      S.listItem().title('Global Settings').icon(FiSettings).child(S.editor().schemaType('global').documentId('global')),
      S.divider(),
      S.listItem()
        .title('Homepage')
        .icon(FiHome)
        .child(S.editor().schemaType('homepage').documentId('homepage').views(views(S))),
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
      // S.listItem().title('Legal').icon(FiFileText).child(S.editor().schemaType('legal').documentId('legal')),
      S.divider(),
      S.listItem().title('Redirects').icon(FiLink).child(S.documentTypeList('redirect').title('Redirects')),
    ]);
