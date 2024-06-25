// components/OrderForm.js
import React from 'react';


const OrderForm = ({form, setForm, handleSubmit}) => {
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">Item Name</label>
                <input id="itemName" name="itemName" value={form.itemName} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="quantity">Quantity</label>
                <input id="quantity" name="quantity" value={form.quantity} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="status">Status</label>
                <input id="status" name="status" value={form.status} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default OrderForm;
