const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

app.use(async(ctx, next) => {
  try {
    await next();
  }
  catch(err) {
    console.error(err.status, err.message);
    ctx.status = err.status || 500;
    ctx.body = err.message;
  }
});

// Numeric argument must be passed first to ctx.throw (e.g. 500)
router.get('test', '/', ctx => {
  ctx.throw(500, 'TESTING ERROR');
  ctx.body = 'Testing Koa router!';
});

app.use(router.routes())
  .use(router.allowedMethods());

const PORT = 3000;
/* eslint-disable-next-line no-useless-escape, no-console */
app.listen(PORT, console.log(`Server jammin\' on ${PORT}`));