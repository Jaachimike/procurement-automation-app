// components/__tests__/OrderForm.test.js
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import OrderForm from '../OrderForm';

describe('OrderForm Component', () => {
    const mockSetForm = jest.fn();
    const mockHandleSubmit = jest.fn((e) => e.preventDefault());
    const formProps = {
        form: {itemName: '', quantity: '', status: ''},
        setForm: mockSetForm,
        handleSubmit: mockHandleSubmit,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders form fields correctly', () => {
        render(<OrderForm {...formProps} />);

        expect(screen.getByRole('textbox', {name: /Item Name/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /Quantity/i})).toBeInTheDocument();
        expect(screen.getByRole('textbox', {name: /Status/i})).toBeInTheDocument();
    });

    test('calls setForm on input change', () => {
        render(<OrderForm {...formProps} />);

        fireEvent.change(screen.getByRole('textbox', {name: /Item Name/i}), {target: {name: 'itemName', value: 'New Item'}});
        expect(mockSetForm).toHaveBeenCalledWith({itemName: 'New Item', quantity: '', status: ''});

        fireEvent.change(screen.getByRole('textbox', {name: /Quantity/i}), {target: {name: 'quantity', value: '10'}});
        expect(mockSetForm).toHaveBeenCalledWith({itemName: '', quantity: '10', status: ''});

        fireEvent.change(screen.getByRole('textbox', {name: /Status/i}), {target: {name: 'status', value: 'Pending'}});
        expect(mockSetForm).toHaveBeenCalledWith({itemName: '', quantity: '', status: 'Pending'});
    });

    test('calls handleSubmit on form submit', () => {
        render(<OrderForm {...formProps} />);

        fireEvent.submit(screen.getByRole('button', {name: /Submit/i}));
        expect(mockHandleSubmit).toHaveBeenCalled();
    });
});
