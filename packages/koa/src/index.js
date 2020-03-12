const api = require('./api');
const Koa = require('koa');
const _ = require('lodash');
const dayjs = require('dayjs');
require('dayjs/locale/th');
dayjs.locale('th');

const app = new Koa();

const PORT = +_.get(process.env, 'PORT', 3000);

console.log(api.stack.map(i => i.path));
const server = app

  .use(require('koa2-cors')())
  .use(require('koa-mongo')({ db: 'hugsnan' }))
  .use(require('koa-logger')())
  .use(require('koa-body')())
  .use(require('koa-respond')())
  .use(require('koa-useragent').userAgent)

  .use(async (ctx, next) => {
    console.log(">")
    try {
      ctx.users = await ctx.db.collection('users');
      const ticket = ctx.cookies.get('ticket');
      ctx.state.user = ticket ? await ctx.users.findOne({ ticket }) : null;
      if (ctx.state.user) {
        console.log(
          `[${ctx.state.user._id}:${dayjs().format('YYYY-MM-DD HH:mm')} ${ctx.request.url}]`,
          ctx.userAgent.source
        );
      }
      await next();
    } catch (err) {
      for (const path of ['response.data.message', 'response.data', 'message']) {
        if (_.get(err, path)) {
          ctx.status = err.status || 500;
          ctx.body = err.message;
          return;
        }
      }
      console.error('ERROR:', err);
      throw err;
    }
  })
  .use(api.routes())
  .use(api.allowedMethods())
  .listen(PORT, () => {
    console.log(`listen on http://0.0.0.0:${PORT}`);
  });
