import request from 'supertest';
import App from '../app';

describe('REST API', () => {
    it('response with 401 on request without authorization token', async () => {
        const app = new App([]);
        const server = app.getServer();

        process.env.SECRET = 'topsecret';

        const res: request.Response = await request(server).get('/property?at=0,0');
        expect(res.status).toEqual(401);
    });
});
