import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import {
    Switch,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../../Dashboard/MyOrders/MyOrders/MyOrders';
import AddCar from '../../Dashboard/AddCar/AddCar';
import useAuth from '../../../hooks/useAuth';
import './Dashboard.css';
import DashboardHome from '../DashboardHome/DashboardHome';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import ManageProducts from '../Admin/ManageProducts/ManageProducts/ManageProducts';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const drawerWidth = 250;

function Dashboard(props) {
    const { user, admin, logoutUser } = useAuth();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />

            <div className="d-flex flex-column side-bar">
                {/* <Divider /> */}
                {!admin && <>
                    <NavLink to='/explore'>Car Gallery</NavLink>
                    <NavLink to={`${url}/payment`}>Payment</NavLink>
                    <NavLink to={`${url}/my-order`}>My Orders</NavLink>
                    <NavLink to={`${url}/review`}>Review</NavLink>
                </>}

                {admin && <>
                    <NavLink to='/'>Home</NavLink>
                    <Divider />
                    <NavLink to={`${url}/manage-all-orders`}>Manage All Orders</NavLink>
                    <Divider />
                    <NavLink to={`${url}/add-car`}>Add New Car</NavLink>
                    <Divider />
                    <NavLink to={`${url}/make-admin`}>Make Admin</NavLink>
                    <Divider />
                    <NavLink to={`${url}/manage-products`}>Manage Products</NavLink>
                    <Divider />
                </>}
                {/* <Divider /> */}
                <Button onClick={logoutUser} variant="outlined" color="error" style={{ margin: '5px', width: '50%' }}>Logout</Button>
            </div>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Hello {user?.displayName}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <PrivateRoute exact path={path}>
                        <DashboardHome />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/payment`}>
                        <Payment />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/my-order`}>
                        <MyOrders />
                    </PrivateRoute>
                    <PrivateRoute path={`${path}/review`}>
                        <Review />
                    </PrivateRoute>
                    {/* Admin Route */}
                    <AdminRoute path={`${path}/manage-all-orders`}>
                        <h2 className="text-center">Manage All Orders</h2>
                        <ManageAllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-car`}>
                        <AddCar />
                    </AdminRoute>
                    <AdminRoute path={`${path}/make-admin`}>
                        <div className="d-flex justify-content-center">
                            <div>
                                <h4 className="m-3 text-secondary">Make an Admin</h4>
                                <MakeAdmin />
                            </div>
                        </div>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-products`}>
                        <h4 className="text-secondary my-3">Manage Your Products</h4>
                        <ManageProducts />
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
