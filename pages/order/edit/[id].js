// pages/order/edit/[id].js
import {useRouter} from 'next/router';
import React, {useEffect, useState} from 'react';
import OrderForm from '../../../components/OrderForm';

const EditOrder = () => {
    const router = useRouter();
    const {id} = router.query;
    const [form, setForm] = useState({itemName: '', quantity: '', status: ''});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            fetch(`/api/orders?id=${id}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setForm(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`/api/orders?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                throw new Error('Failed to update the order');
            }

            router.push('/');
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Edit Order</h1>
            <OrderForm form={form} setForm={setForm} handleSubmit={handleSubmit} />
        </div>
    );
};

export default EditOrder;
