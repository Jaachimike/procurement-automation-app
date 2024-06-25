// pages/api/orders.js
import {v4 as uuidv4} from 'uuid';

let orders = [];

export default function handler(req, res) {
    const {method} = req;
    const {id} = req.query;

    switch (method) {
        case 'GET':
            if (id) {
                const order = orders.find(order => order.id === id);
                res.status(200).json(order);
            } else {
                res.status(200).json(orders);
            }
            break;
        case 'POST':
            const newOrder = {id: uuidv4(), ...req.body};
            orders.push(newOrder);
            res.status(201).json(newOrder);
            break;
        case 'PUT':
            const index = orders.findIndex(order => order.id === id);
            if (index !== -1) {
                orders[index] = {id, ...req.body};
                res.status(200).json(orders[index]);
            } else {
                res.status(404).json({message: 'Order not found'});
            }
            break;
        case 'DELETE':
            orders = orders.filter(order => order.id !== id);
            res.status(204).end();
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
