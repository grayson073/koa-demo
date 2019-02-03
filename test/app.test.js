const app = require('../app');
const server = app.listen();
const request = require('supertest').agent(server);

describe('Hello World! / Koa Test', () => {

  afterAll(() => {
    server.close();
  });

  it('Should say "Testing Koa router on main route!"', async() => {
    const res = await request
      .get('/');
    expect(res.text).toEqual('Testing Koa router on main route!');
  });

  it('Should throw an error with 500 status code', async() => {
    const res = await request
      .get('/error');
    expect(res.text).toEqual('Error: We threw one at route: /error');
    expect(res.status).toEqual(500);
  });
});