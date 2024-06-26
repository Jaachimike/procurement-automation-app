import React from 'react';
import {render, screen} from '@testing-library/react';
import OrderList from '../OrderList';

const orders = [
    {id: '1', itemName: 'Item 1', quantity: 1, status: 'Pending'},
    {id: '2', itemName: 'Item 2', quantity: 2, status: 'Shipped'},
];

test('renders a table of orders', () => {
    render(<OrderList orders={orders} />);

    // Verify table headers
    expect(screen.getByText('ID')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Quantity')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();

    // Verify table rows and content using data-testid
    orders.forEach(order => {
        expect(screen.getByTestId(`order-${order.id}`)).toBeInTheDocument();
        expect(screen.getByTestId(`order-${order.id}-itemName`)).toHaveTextContent(order.itemName);
        expect(screen.getByTestId(`order-${order.id}-quantity`)).toHaveTextContent(order.quantity.toString());
        expect(screen.getByTestId(`order-${order.id}-status`)).toHaveTextContent(order.status);

        // Verify action buttons (optional based on your implementation)
        expect(screen.getByTestId(`order-${order.id}-view-button`)).toHaveTextContent('View');
        expect(screen.getByTestId(`order-${order.id}-edit-button`)).toHaveTextContent('Edit');
        expect(screen.getByTestId(`order-${order.id}-delete-button`)).toHaveTextContent('Delete');
    });
});
