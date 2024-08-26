import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

import { useMemo } from 'react';

function Admin() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const list = useMemo(
        () => [
            {
                title: 'Users',
                icon: <PersonIcon />,
                link: '',
            },
            {
                title: 'Cakes',
                icon: <CakeIcon />,
                link: 'users',
            },
            {
                title: 'Orders',
                icon: <ReceiptLongIcon />,
                link: 'rooms',
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
                <Typography variant="h3" textAlign="center">
                    Manage user
                </Typography>
            </Box>
        </Box>
    );
}

export default Admin;
