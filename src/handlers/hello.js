async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from https://mz.dev' }),
  };
}

export const handler = hello;
