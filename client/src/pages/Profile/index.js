import { Typography, Box, Stack, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate();

    return (
        <Box p="32px">
            <Typography fontSize="16px">
                Home / <b>Profile</b>
            </Typography>

            <Stack
                direction="row"
                spacing={5}
                alignItems="center"
                sx={{
                    marginY: '32px',
                }}
            >
                <Paper
                    onClick={() => navigate('/profile/info')}
                    sx={{
                        borderRadius: '12px',
                        cursor: 'pointer',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <Stack padding="48px 32px" direction="row" alignItems="center" spacing={2}>
                        <PersonIcon fontSize="large" />
                        <Typography fontWeight="600" variant="h4">
                            Personal info
                        </Typography>
                    </Stack>
                </Paper>
                <Paper
                    onClick={() => navigate('/profile/orders')}
                    sx={{
                        borderRadius: '12px',
                        minWidth: '235px',
                        cursor: 'pointer',
                        '&:hover': {
                            transform: 'scale(1.05)',
                        },
                    }}
                >
                    <Stack padding="48px 32px" direction="row" alignItems="center" spacing={2} width="100%">
                        <LocalAtmIcon fontSize="large" />
                        <Typography fontWeight="600" variant="h4">
                            Orders
                        </Typography>
                    </Stack>
                </Paper>
            </Stack>
        </Box>
    );
}

export default Profile;
