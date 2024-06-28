// components/OrderForm.js
import React from 'react';
import styles from '../styles/OrderForm.module.css';


const OrderForm = ({form, setForm, handleSubmit}) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };


    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="itemName">Item Name</label>
                <input id="itemName" type='text' name="itemName" value={form.itemName} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" type='number' name="quantity" value={form.quantity} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="status">Status</label>
                <select
                    id="status"
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                    required
                >
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
                </select>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
    );
};

export default OrderForm;
