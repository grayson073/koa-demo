const koa = require('koa');
const app = new koa();

app.use(() => {
  this.body = 'HELLO WORLD!';
});

const PORT = 3000;
/* eslint-disable-next-line no-useless-escape, no-console */
app.listen(PORT, console.log(`Server jammin\' on ${PORT}`));