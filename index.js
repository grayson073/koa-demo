const koa = require('koa');
const koaRouter = require('koa-router');

const app = new koa();
const router = new koaRouter();

router.get('test', '/', ctx => {
  ctx.body = 'Testing Koa router!';
});

app.use(router.routes())
  .use(router.allowedMethods());

const PORT = 3000;
/* eslint-disable-next-line no-useless-escape, no-console */
app.listen(PORT, console.log(`Server jammin\' on ${PORT}`));