export const handler = async (event, context) => {
  // statusCode and body are necessary
  // http status codes: 200 OK (success), 400 Bad Request, 404 Not found, 500 Internal Server Error (general server error)
  // body needs to be a string JSON.stringify(data)
  return {
    statusCode: 200,
    body: 'Netlify Functions Example',
  };
};
