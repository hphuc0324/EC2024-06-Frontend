import orderApi from 'api/orderApi';
import { showToast } from 'components/ToastMessage';
import { useEffect, useState, useMemo } from 'react';

import { Box, Typography } from '@mui/material';

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);
    const columns = useMemo(
        () => [
            {
                field: '_id',
                headerName: 'Order ID',
                headerClassName: 'header-row',
                width: 300,
            },
            {
                field: 'order_paymentMethod',
                headerName: 'Payment Method',
                headerClassName: 'header-row',
                width: 150,
            },
            {
                field: 'order_state',
                headerName: 'Status',
                headerClassName: 'header-row',
                width: 100,
            },
            {
                field: 'order_totalPrice',
                headerName: 'Order price',
                headerClassName: 'header-row',
                flex: 1,
            },
        ],
        [rowId],
    );

    useEffect(() => {
        const handleFetchOrders = async () => {
            try {
                const res = await orderApi.getOrders();

                setOrders(res.data.metadata);
            } catch (error) {
                showToast('Error', 'Error while fetching orders');
            }
        };

        handleFetchOrders();
    }, []);

    console.log(orders.length);

    return (
        <>
            {orders.length !== 0 && (
                <Box
                    sx={{
                        width: '100%',
                        padding: '16px',
                        height: 400,
                    }}
                >
                    <Typography variant="h3" textAlign="center" mb="12px">
                        Manage products
                    </Typography>
                    <DataGrid
                        columns={columns}
                        rows={orders}
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
                            console.log(newRow);
                        }}
                        onProcessRowUpdateError={(error) => console.log(error)}
                        sx={{
                            fontSize: '16px',
                        }}
                    />
                </Box>
            )}
        </>
    );
}

export default UserOrders;
