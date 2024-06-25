// api/__tests__/orders.test.js
import {createMocks} from 'node-mocks-http';
import handler from '../orders';

test('GET /api/orders', async () => {
    const {req, res} = createMocks({
        method: 'GET',
    });

    await handler(req, res);

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual([]);
});
