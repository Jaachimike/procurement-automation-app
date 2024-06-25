// pages/order/new.js
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import OrderForm from '../../components/OrderForm';

const CreateOrder = () => {
    const router = useRouter();
    const [form, setForm] = useState({itemName: '', quantity: '', status: ''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        });
        router.push('/');
    };

    return (
        <div>
            <h1>Create Order</h1>
            <OrderForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
        </div>
    );
};

export default CreateOrder;
