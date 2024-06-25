// pages/index.js
import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import OrderList from '../components/OrderList';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  const handleDelete = async (orderId) => {
    try {
      await fetch(`/api/orders?id=${orderId}`, {
        method: 'DELETE',
      });
      // Update orders state to reflect deletion (optional)
      setOrders(orders.filter(order => order.id !== orderId));
      // Navigate back to dashboard
      router.push('/');
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className={styles.dashboardContainer}>
      <h1 className={styles.title}>Procurement Automation App Dashboard</h1>
      <Link href="/order/new" className={styles.createOrderButton}>Create Order</Link>
      <OrderList orders={orders} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
