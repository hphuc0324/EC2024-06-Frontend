import { Box, Avatar, Typography } from '@mui/material';
import { showToast } from 'components/ToastMessage';
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows = [
    {
        _id: '64ed7d5a9f1c2b1a3e4b5678',
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'hashedpassword123',
        gender: 'male',
        phoneNumber: '123-456-7890',
        address: '123 Main St, Anytown, USA',
        status: 'active',
        verify: true,
        role: 'User',
    },
    {
        _id: '64ed7d5a9f1c2b1a3e4b5679',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        password: 'hashedpassword456',
        gender: 'female',
        phoneNumber: '987-654-3210',
        address: '456 Elm St, Othertown, USA',
        status: 'active',
        verify: false,
        role: 'Admin',
    },
    {
        _id: '64ed7d5a9f1c2b1a3e4b5680',
        name: 'Alice Baker',
        email: 'alice.baker@example.com',
        password: 'hashedpassword789',
        gender: 'female',
        phoneNumber: '555-555-5555',
        address: '789 Oak St, Bakertown, USA',
        status: 'active',
        verify: true,
        role: 'Baker',
    },
    {
        _id: '64ed7d5a9f1c2b1a3e4b5681',
        name: 'Bob Brown',
        email: 'bob.brown@example.com',
        password: 'hashedpassword321',
        gender: 'male',
        phoneNumber: '222-333-4444',
        address: '321 Maple St, Smalltown, USA',
        status: 'banned',
        verify: false,
        role: 'User',
    },
    {
        _id: '64ed7d5a9f1c2b1a3e4b5682',
        name: 'Clara Chef',
        email: 'clara.chef@example.com',
        password: 'hashedpassword654',
        gender: 'female',
        phoneNumber: '111-222-3333',
        address: '654 Birch St, Bigcity, USA',
        status: 'active',
        verify: false,
        role: 'Baker',
    },
];

const UserActions = ({ params, rowId, setRowId }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (rowId === params.id && success) setSuccess(false);
    }, [rowId]);

    const handleSubmit = () => {
        setLoading(true);
    };

    return (
        <Box
            sx={{
                m: 1,
                position: 'relative',
            }}
        >
            {success ? (
                <Fab
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'green',
                    }}
                >
                    <Check
                        sx={{
                            color: 'white',
                        }}
                    />
                </Fab>
            ) : (
                <Fab
                    sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: 'green',
                        cursor: 'pointer',
                    }}
                    disabled={params.id !== rowId || loading}
                    onClick={handleSubmit}
                >
                    <Save
                        sx={{
                            color: 'white',
                        }}
                    />
                </Fab>
            )}
            {loading && (
                <CircularProgress
                    size={52}
                    sx={{
                        position: 'absolute',
                        top: -6,
                        left: -6,
                        zIndex: 1,
                    }}
                />
            )}
        </Box>
    );
};

function UserManagement() {
    const [users, setUsers] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);

    const columns = useMemo(
        () => [
            {
                field: 'name',
                headerName: 'Username',
                headerClassName: 'header-row',
                width: 170,
            },
            {
                field: 'email',
                headerName: 'Email',
                headerClassName: 'header-row',
                width: 300,
            },
            {
                field: 'gender',
                headerName: 'Gender',
                headerClassName: 'header-row',
                width: 100,
            },
            {
                field: 'status',
                headerName: 'Status',
                headerClassName: 'header-row',
                width: 150,
                editable: true,
                type: 'singleSelect',
                valueOptions: ['active', 'banned'],
            },
            {
                field: 'role',
                headerName: 'Role',
                headerClassName: 'header-row',
                type: 'singleSelect',
                valueOptions: ['admin', 'user', 'baker'],
                editable: true,
            },
            {
                field: 'actions',
                headerName: 'Actions',
                headerClassName: 'header-row',
                flex: 1,
                type: 'actions',
                renderCell: (params) => <UserActions {...{ params, rowId, setRowId }} />,
            },
        ],
        [rowId],
    );

    return (
        <Box
            sx={{
                width: '100%',
                height: 400,
            }}
        >
            <Typography variant="h3" textAlign="center" mb="12px">
                Manage users
            </Typography>
            <DataGrid
                columns={columns}
                rows={rows}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5, 10, 20]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                getRowSpacing={(params) => ({
                    top: params.isFirstVisible ? 0 : 5,
                    bottom: params.isLastVisible ? 0 : 5,
                })}
                processRowUpdate={(newRow) => {
                    setRowId(newRow._id);
                }}
                onProcessRowUpdateError={(error) => console.log(error)}
                sx={{
                    color: 'white',
                    backgroundColor: 'black',
                    fontSize: '16px',

                    '& .header-row': {
                        backgroundColor: 'black',
                    },
                }}
            />
        </Box>
    );
}

export default UserManagement;
