// components/OrderDetails.js
import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import styles from '../styles/OrderDetails.module.css'

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
            <h1 className={styles.title}>Order Details</h1>
            <div className={styles.container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{order.itemName}</td>
                            <td>{order.quantity}</td>
                            <td>{order.status}</td>
                            <td>
                                <div className={styles.actions}>
                                    <button className={styles.actionButton}>
                                        <Link href={`/order/edit/${order.id}`}>Edit Order</Link>
                                    </button>
                                    <button className={styles.actionButton} onClick={handleDelete}>Delete Order</button>
                                    <button className={styles.actionButton}>
                                        <Link href="/">Back to Dashboard</Link>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default OrderDetails;
