import { theme } from 'https://themer.sanity.build/api/hues?default=929292&primary=929292&transparent=929292&positive=darkest:101112&caution=darkest:101112&critical=darkest:101112&darkest=000000';
import { defineConfig, isDev } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './structure';
import { media, mediaAssetSource } from 'sanity-plugin-media';
import { muxInput } from 'sanity-plugin-mux-input';
import { netlifyWidget } from 'sanity-plugin-dashboard-widget-netlify';
import { dashboardTool } from '@sanity/dashboard';
import { PreviewAction } from './actions/actions';

export default defineConfig({
  theme,

  name: 'default',
  title: 'Studio',

  projectId: 'hnuo52b9',
  dataset: 'production',

  document: {
    actions: [PreviewAction],
  },

  plugins: [
    structureTool({ structure }),
    media(),
    muxInput(),
    dashboardTool({
      widgets: [
        //TODO
        netlifyWidget({
          title: 'Netlify Deploys',
          description:
            'Because this website is statically built, it needs to be re-build and re-deployed to see the changes when content is published. You can check if the build was successful:',
          sites: [
            {
              title: 'Website',
              apiId: 'yyyyy-xxxxx-zzzz-xxxx-yyyyyyyy',
              buildHookId: 'yyyyxxxxxyyyxxdxxx',
              name: 'sanity-gatsby-blog-20-web',
              url: 'https://my-sanity-deployment.com',
            },
          ],
        }),
        // projectUsersWidget({ layout: 'medium' }),
      ],
    }),
    ...(isDev ? [visionTool()] : []),
  ],

  schema: {
    types: schemaTypes,
    //TODO
    templates: (prev) => [...prev.filter((el) => !['media.tag', 'guide', 'global', 'homepage', 'legal'].includes(el.schemaType))],
  },

  // Show Media Library on image selection
  form: {
    image: {
      assetSources: () => [mediaAssetSource],
    },
  },
});
