import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: 'production',
  },
  typegen: {
    enabled: true,
    path: '../web/app/**/*.{ts,tsx,js,jsx,vue}',
    schema: 'schema.json',
    generates: '../web/app/types/sanity.ts',
    overloadClientMethods: true,
  },
  // TODO
  // studioHost: 'baustelle',
});
