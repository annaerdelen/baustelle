import indexer from 'sanity-algolia';
import { sanity, algolia, DATA } from './algolia-index-all';

export const handler = async (event) => {
  // if (event.headers['content-type'] !== 'application/json' || !event.body || !event.body.length) {
  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({ message: 'Bad request' }),
  //   };
  // }

  const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

  const sanityAlgolia = indexer(
    // The first parameter maps a Sanity document type to its respective Algolia
    // search index. In this example both `post` and `article` Sanity types live
    // in the same Algolia index. Optionally you can also customize how the
    // document is fetched from Sanity by specifying a GROQ projection.
    //
    // In this example we fetch the plain text from Portable Text rich text
    // content via the pt::text function.
    //
    // _id and other system fields are handled automatically.
    {
      page: {
        index,
        projection: DATA,
      },
      project: {
        index,
        projection: DATA,
      },
    },
    // Serializer function for manipulating documents with Javascript
    // I'm not using it as GROQ is doing all the work
    (document) => document,

    // Visibility function to determine which document should be included
    (document) => !['unapproved'].includes(document.status)

    // The second parameter is a function that maps from a fetched Sanity document
    // to an Algolia Record. Here you can do further mutations to the data before
    // it is sent to Algolia.
    // (document) => {
    //   switch (document._type) {
    //     // case 'post':
    //     //   return Object.assign({}, document, {
    //     //     custom: 'An additional custom field for posts, perhaps?',
    //     //   });
    //     // case 'article':
    //     //   return {
    //     //     title: document.heading,
    //     //     body: document.body,
    //     //     authorNames: document.authorNames,
    //     //   };
    //     default:
    //       return document;
    //   }
    // },
    // // Visibility function (optional).
    // //
    // // The third parameter is an optional visibility function. Returning `true`
    // // for a given document here specifies that it should be indexed for search
    // // in Algolia. This is handy if for instance a field value on the document
    // // decides if it should be indexed or not. This would also be the place to
    // // implement any `publishedAt` datetime visibility rules or other custom
    // // visibility scheme you may be using.
    // (document) => {
    //   if (document.hasOwnProperty('isHidden')) {
    //     return !document.isHidden;
    //   }
    //   return true;
    // }
  );

  return sanityAlgolia
    .webhookSync(sanity, JSON.parse(event.body))
    .then(() => {
      return {
        statusCode: 200,
        body: 'ok',
      };
    })
    .catch(() => {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Something went wrong' }),
      };
    });
};
