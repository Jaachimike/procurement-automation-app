import React from 'react';
import {render, screen, waitFor, fireEvent} from '@testing-library/react';
import {useRouter} from 'next/router';
import OrderDetails from '../OrderDetails';

// Mock useRouter hook since it's used in the component
jest.mock('next/router', () => ({
    useRouter: jest.fn(),
}));

describe('OrderDetails Component', () => {
    const mockPush = jest.fn();
    const mockRouter = {
        push: mockPush,
    };

    beforeEach(() => {
        useRouter.mockReturnValue(mockRouter);
    });

    test('renders order details correctly', async () => {
        // Mock data for order
        const mockOrder = {
            id: '1',
            itemName: 'Test Item',
            quantity: 2,
            status: 'Pending',
        };

        // Mock fetch function to return mockOrder
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockOrder),
        });

        render(<OrderDetails id="1" />);

        // Verify loading state initially
        expect(screen.getByText('Loading...')).toBeInTheDocument();

        // Wait for fetch to resolve and render order details
        await waitFor(() => {
            expect(screen.getByText('Order Details')).toBeInTheDocument();
            expect(screen.getByText(mockOrder.itemName)).toBeInTheDocument();
            expect(screen.getByText(mockOrder.quantity.toString())).toBeInTheDocument();
            expect(screen.getByText(mockOrder.status)).toBeInTheDocument();
        });

        // Verify action buttons
        const deleteButton = screen.getByText('Delete Order');

        expect(deleteButton).toBeInTheDocument();

        // Clean up after test
        delete global.fetch;
    });

    test('handles fetch error', async () => {
        // Mock error response from fetch
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            status: 500,
            statusText: 'Internal Server Error',
        });

        render(<OrderDetails id="1" />);

        // Verify error state
        await waitFor(() => {
            expect(screen.getByText('Error: Network response was not ok')).toBeInTheDocument();
        });

        // Clean up after test
        delete global.fetch;
    });
});
