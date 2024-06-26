import React from 'react';
import Link from 'next/link';
import styles from '../styles/Order.module.css';

const OrderList = ({orders, onDelete}) => (
    <div className={styles.orderContainer}>
        <table className={styles.orderTable}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id} data-testid={`order-${order.id}`}>
                        <td>{order.id.substring(0, 8)}</td>
                        <td data-testid={`order-${order.id}-itemName`}>{order.itemName}</td>
                        <td data-testid={`order-${order.id}-quantity`}>{order.quantity}</td>
                        <td data-testid={`order-${order.id}-status`}>{order.status}</td>
                        <td className={styles.actions}>
                            <Link href={`/order/${order.id}`} className={styles.viewButton} data-testid={`order-${order.id}-view-button`}>
                                View
                            </Link>
                            <Link href={`/order/edit/${order.id}`} className={styles.editButton} data-testid={`order-${order.id}-edit-button`}>
                                Edit
                            </Link>
                            <button className={styles.deleteButton} onClick={() => onDelete(order.id)} data-testid={`order-${order.id}-delete-button`}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default OrderList;
