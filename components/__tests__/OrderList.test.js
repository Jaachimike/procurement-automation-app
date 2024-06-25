// components/__tests__/OrderList.test.js
import React from 'react';
import {render, screen} from '@testing-library/react';
import OrderList from '../OrderList';

const orders = [
    {id: '1', itemName: 'Item 1', quantity: 1, status: 'Pending'},
    {id: '2', itemName: 'Item 2', quantity: 2, status: 'Shipped'},
];

test('renders a list of orders', () => {
    render(<OrderList orders={orders} />);
    expect(screen.getByText('Item 1 - 1 - Pending')).toBeInTheDocument();
    expect(screen.getByText('Item 2 - 2 - Shipped')).toBeInTheDocument();
});
