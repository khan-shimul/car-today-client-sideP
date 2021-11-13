import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Table } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [allOrders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [allOrders])

    // handle status update
    const handleStatus = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    };

    // handle delete order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure want to delete the order?');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Successfully deleted')
                        const restAllOrders = allOrders?.filter(rest => rest._id !== id);
                        setOrders(restAllOrders)
                    }
                })
        }
    }

    return (
        <div>
            <div className="table-responsive-sm table-responsive table-responsive-md table-responsive-lg table-responsive-xl my-3">
                {
                    allOrders.length && <Table striped bordered hover variant="dark">
                        <thead >
                            <tr>
                                <th>User Name</th>
                                <th>Address</th>
                                <th>Product Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Trash</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allOrders.map(allOrder => <tr key={allOrder.unique_id}>
                                    <td>{allOrder?.fullName}</td>
                                    <td>{allOrder?.address}</td>
                                    <td>{allOrder?.carName}</td>
                                    <td>{allOrder?.email}</td>
                                    <td><Dropdown>
                                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                            {allOrder.status}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleStatus(allOrder._id)}>Shipped</Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown></td>

                                    <td><Button onClick={() => handleDeleteOrder(allOrder._id)} variant="danger" size="sm">
                                        Delete
                                    </Button></td>
                                </tr>)
                            }
                        </tbody>
                    </Table>
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;