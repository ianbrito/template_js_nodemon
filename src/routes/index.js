
async function routes(fastify, options) {
  fastify.get("/user", async function (request, reply) {
    reply.send({ name: "ian brito" });
  });
}

export default routes;
