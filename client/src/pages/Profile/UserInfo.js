import { Box, Grid, MenuItem, Paper, Select, TextField, FormControl, InputLabel, Button, Stack } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import { showToast } from 'components/ToastMessage';
import userApi from 'api/userApi';

function UserInfo() {
    const [user, setUser] = useState({});
    const [originalUser, setOriginalUser] = useState({});
    const [isModified, setIsModified] = useState(false);

    const handleChangeUserInfo = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleUpdateUserInfo = async (e) => {
        e.preventDefault();
        try {
            const res = await userApi.update(user);
            showToast('Success', 'Update user information successfully');
            setOriginalUser(res.data.metadata);
            setIsModified(false);
        } catch (error) {
            showToast('Error', error.message);
        }
    };

    useEffect(() => {
        const handleFetchUser = async () => {
            try {
                const res = await userApi.getProfile();

                setUser(res.data.metadata);
                setOriginalUser(res.data.metadata);
            } catch (error) {
                showToast('Error', error.message);
            }
        };

        handleFetchUser();
    }, []);

    useEffect(() => {
        const checkIfModified = () => {
            setIsModified(JSON.stringify(user) !== JSON.stringify(originalUser));
        };

        checkIfModified();
    }, [user, originalUser]);

    return (
        <Box padding="32px">
            <Paper
                sx={{
                    padding: '64px',
                }}
            >
                <form onSubmit={handleUpdateUserInfo}>
                    <Stack direction="row" mb="16px">
                        <AccountCircleIcon
                            sx={{
                                fontSize: '48px', // Change this value to the desired size
                            }}
                        />

                        <Button
                            disableRipple
                            disabled={!isModified}
                            size="large"
                            type="submit"
                            sx={{
                                backgroundColor: 'rgb(0,87,255)',
                                color: 'white',
                                opacity: '0.8',
                                px: '32px',
                                ml: '32px',
                                '&:hover': {
                                    backgroundColor: 'rgb(0,87,255)',
                                    opacity: '1',
                                },

                                '&:disabled': {
                                    backgroundColor: 'rgb(0,87,255)',
                                    opacity: '0.5',
                                },
                            }}
                        >
                            Save
                        </Button>
                    </Stack>
                    <Grid spacing={2} container wrap="wrap" justifyContent="space-between">
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField
                                fullWidth
                                value={user?.name}
                                label="Name"
                                name="name"
                                onChange={handleChangeUserInfo}
                                InputProps={{
                                    style: { fontSize: '16px' },
                                }}
                                InputLabelProps={{
                                    style: { fontSize: '16px' },
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField
                                fullWidth
                                value={user?.email}
                                label="Email"
                                name="email"
                                onChange={handleChangeUserInfo}
                                InputProps={{
                                    style: { fontSize: '16px' },
                                }}
                                InputLabelProps={{
                                    style: { fontSize: '16px' },
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField
                                fullWidth
                                label="Phonenumber"
                                name="phoneNumber"
                                value={user?.phoneNumber}
                                onChange={handleChangeUserInfo}
                                InputProps={{
                                    style: { fontSize: '16px' },
                                }}
                                InputLabelProps={{
                                    style: { fontSize: '16px' },
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <TextField
                                fullWidth
                                label="Address"
                                name="address"
                                value={user?.address}
                                onChange={handleChangeUserInfo}
                                InputProps={{
                                    style: { fontSize: '16px' },
                                }}
                                InputLabelProps={{
                                    style: { fontSize: '16px' },
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={6} lg={6}>
                            <FormControl fullWidth>
                                <InputLabel
                                    id="demo-simple-select-label"
                                    sx={{
                                        fontSize: '16px',
                                    }}
                                >
                                    Gender
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    fullWidth
                                    label="Gender"
                                    value={user?.gender}
                                    name="gender"
                                    onChange={handleChangeUserInfo}
                                    inputProps={{
                                        style: { fontSize: '16px' },
                                    }}
                                >
                                    <MenuItem
                                        value="male"
                                        sx={{
                                            fontSize: '16px',
                                        }}
                                    >
                                        Male
                                    </MenuItem>
                                    <MenuItem
                                        value="female"
                                        sx={{
                                            fontSize: '16px',
                                        }}
                                    >
                                        Female
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
}

export default UserInfo;
