import algoliasearch from 'algoliasearch';
import { createClient } from '@sanity/client';

export const algolia = algoliasearch(process.env.ALGOLIA_APPLICATION_ID, process.env.ALGOLIA_API_KEY);

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: false,
});

export const DATA = `{
  _type,
  _rev,
  "objectID": _id,
  _createdAt,
  title, 
  'description': pt::text(description),
      
  _type == "project" => {
    date,
  },
}`;

const QUERY = `
*[_type in ['page', 'project']]
  ${DATA}

`;

export const handler = async () => {
  const documents = await sanity.fetch(QUERY);
  const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

  try {
    await index.saveObjects(documents);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Success' }),
    };
  } catch (error) {
    console.log(error);

    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
