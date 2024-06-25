// components/OrderDetails.js
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const OrderDetails = ({id}) => {
    const router = useRouter();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const response = await fetch(`/api/orders?id=${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOrder(data);
            } catch (error) {
                setError(error.message);
                // console.log(error);
            }
        };

        if (id) {
            fetchOrder();
        }
    }, [id]);

    const handleDelete = async () => {
        await fetch(`/api/orders?id=${id}`, {
            method: 'DELETE',
        });
        router.push('/');
    };

    if (error) return <p>Error: {error}</p>;
    if (!order) return <p>Loading...</p>;

    return (
        <div>
            <h1>Order Details</h1>
            <p>Item Name: {order.itemName}</p>
            <p>Quantity: {order.quantity}</p>
            <p>Status: {order.status}</p>
            <Link href={`/order/edit/${order.id}`}>Edit Order</Link>
            <button onClick={handleDelete}>Delete Order</button>
            <Link href="/">Back to Dashboard</Link>
        </div>
    );
};

export default OrderDetails;
