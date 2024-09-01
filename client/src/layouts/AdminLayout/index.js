import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LogoutIcon from '@mui/icons-material/Logout';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';

import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { showToast } from 'components/ToastMessage';
import { unwrapResult } from '@reduxjs/toolkit';
import { logout } from 'features/Auth/userSlice';

function AdminLayout({ children }) {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            const action = await dispatch(logout());

            const resultAction = unwrapResult(action);
            navigate('/');
        } catch (err) {
            showToast(err);
        }
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const list = useMemo(
        () => [
            {
                title: 'Users',
                icon: <PersonIcon />,
                link: '/admin/users',
            },
            {
                title: 'Cakes',
                icon: <CakeIcon />,
                link: '/admin/products',
            },

            {
                title: 'Categories',
                icon: <CategoryOutlinedIcon />,
                link: '/admin/categories',
            },
        ],
        [],
    );

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {list.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton
                            onClick={() => navigate(item.link)}
                            sx={{
                                '&:hover': {
                                    backgroundColor: '#3C3D37',
                                },
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: 'white',

                                    '& .MuiSvgIcon-root': {
                                        fontSize: '20px',
                                    },
                                }}
                            >
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.title}
                                sx={{
                                    '.MuiListItemText-primary': {
                                        fontSize: '16px',
                                        fontWeight: '600',
                                    },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Box
            sx={{
                backgroundColor: 'black',
            }}
        >
            <AppBar
                position="fixed"
                sx={{
                    zIndex: '999',
                    backgroundColor: '#3C3D37',
                }}
            >
                <Toolbar>
                    <IconButton
                        onClick={() => setOpen((prev) => !prev)}
                        sx={{
                            color: 'white',
                        }}
                    >
                        <MenuIcon fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="persistent"
                open={open}
                anchor="left"
                sx={{
                    '.MuiPaper-root': {
                        mt: '64px',
                        backgroundColor: 'black',
                        color: 'white',
                        border: '1px solid #3C3D37',
                        borderLeft: 'none',
                    },
                }}
            >
                {DrawerList}
                <Box p="16px" display="flex" alignItems="center" gap={2}>
                    <Avatar>P</Avatar>
                    <Typography variant="h6">Admin name</Typography>
                    <IconButton onClick={handleLogout}>
                        <LogoutIcon
                            fontSize="large"
                            sx={{
                                color: 'white',
                            }}
                        />
                    </IconButton>
                </Box>
            </Drawer>
            <Box
                ml={open ? '250px' : 0}
                mt="64px"
                padding="32px"
                sx={{
                    height: '100vh',
                    color: 'white',
                }}
            >
                {children}
            </Box>
        </Box>
    );
}

export default AdminLayout;
