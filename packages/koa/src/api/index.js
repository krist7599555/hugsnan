const router = new require('koa-router')();
const authRouter = require('./auth');
const quizRouter = require('./quiz');

module.exports = router
  .prefix('/api')
  .get('/', ctx => (ctx.body = 'Hugsnan API'))
  .use(authRouter.routes())
  .use(authRouter.allowedMethods())
  .use(quizRouter.routes())
  .use(quizRouter.allowedMethods());
