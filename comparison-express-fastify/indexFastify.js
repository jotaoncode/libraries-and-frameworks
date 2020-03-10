const fastify = require('fastify')()

fastify.route({
  method: 'GET',
  url: '/',
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: { type: 'string' }
        }
      }
    }
  },
  // this function is executed for every request before the handler is executed
  beforeHandler: async (request, reply) => {
    console.log('Before handler');
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return { hello: 'world' }
  }
})

const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
