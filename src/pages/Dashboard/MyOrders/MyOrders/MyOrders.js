import React, { useEffect, useState } from 'react';
import { Row, Table, Button } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })
    }, [myOrders]);

    // handle delete
    const handleDelete = id => {
        const proceed = window.confirm('Are your sure want to cancel this order?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    if (result.deletedCount) {
                        alert('Successfully cancel the booking')
                        const restOrders = myOrders?.filter(myOrder => myOrder._id !== id);
                        setMyOrders(restOrders)
                    }
                })
        }

    }

    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {
                    myOrders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                    />)
                }
            </Row>
        </div>
    );
};

export default MyOrders;