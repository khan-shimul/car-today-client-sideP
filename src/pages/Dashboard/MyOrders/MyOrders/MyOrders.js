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
            <div className="table-responsive-sm table-responsive table-responsive-md table-responsive-lg table-responsive-xl text-center">
                {
                    myOrders.length && <div>
                        <h2 className="text-center my-4 fw-bold fs-5">Your Orders</h2>
                        <div className="line d-flex mx-auto"></div>
                        <Table striped bordered hover variant="light" className=" my-4">
                            <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th>Cost</th>
                                    <th>Status</th>
                                    <th>Review</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    myOrders?.map(order => <tr key={order._id}>
                                        <td>{order?.carName}</td>
                                        <td>{order?.carSelf?.color}</td>
                                        <td>${order?.carSelf?.price}</td>
                                        <td>{order?.status}</td>
                                        <td><Button onClick={() => handleDelete(order._id)} variant="danger">Cancel</Button></td>
                                    </tr>)
                                }
                            </tbody>
                        </Table>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyOrders;