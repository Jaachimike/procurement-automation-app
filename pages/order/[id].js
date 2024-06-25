// pages/order/[id].js
import React from "react";
import {useRouter} from 'next/router';
import OrderDetails from '../../components/OrderDetails';

const OrderDetailsPage = () => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <OrderDetails id={id} />
    );
};

export default OrderDetailsPage;
