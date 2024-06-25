// components/OrderList.js
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Order.module.css';

const OrderList = ({orders, onDelete}) => (
    <div className={styles.orderContainer}>
        <div className={styles.header}>
            <span className={styles.headerItem}>Name</span>
            <span className={styles.headerItem}>Quantity</span>
            <span className={styles.headerItem}>Status</span>
            <span className={styles.headerItem}>Actions</span>
        </div>
        <ul className={styles.orderList}>
            {orders.map(order => (
                <li key={order.id} className={styles.orderItem}>
                    <Link href={`/order/${order.id}`} className={styles.orderLink}>
                        <span className={styles.itemName}>{order.itemName}</span>
                        <span className={styles.itemQuantity}>{order.quantity}</span>
                        <span className={styles.itemStatus}>{order.status}</span>
                    </Link>
                    <div className={styles.actions}>
                        <Link href={`/order/edit/${order.id}`} className={styles.editButton}>
                            Edit
                        </Link>
                        <button className={styles.deleteButton} onClick={() => onDelete(order.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

export default OrderList;
