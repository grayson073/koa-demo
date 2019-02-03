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

// A simple test to write ctx.body to the page
router.get('test', '/', ctx => {
  ctx.body = 'Testing Koa router on main route!';
});

// Numeric argument must be passed first to ctx.throw (e.g. 500)
router.get('test', '/error', ctx => {
  ctx.throw(500, `Error: We threw one at route: ${ctx.url}`);
});

app.use(router.routes())
  .use(router.allowedMethods());

if(!module.parent) {
  const PORT = 3000;
  /* eslint-disable-next-line no-useless-escape, no-console */
  app.listen(PORT, console.log(`Server jammin\' on ${PORT}`));
}
else {
  module.exports = app;
}
