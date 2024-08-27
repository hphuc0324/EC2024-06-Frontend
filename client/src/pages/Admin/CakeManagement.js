import { Box, Avatar, Typography } from '@mui/material';
import productApi from 'api/productApi';
import { showToast } from 'components/ToastMessage';
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';

import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const CakeActions = ({ params, rowId, setRowId }) => {
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

function CakeManagement() {
    const [products, setProducts] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);

    useEffect(() => {
        const handleFetchProducts = async () => {
            try {
                const res = await productApi.getAll();

                setProducts(res.data.metadata);
            } catch (error) {
                showToast('Error', error);
            }
        };

        handleFetchProducts();
    }, []);

    const columns = useMemo(
        () => [
            {
                field: 'product_name',
                headerName: 'Cake name',
                headerClassName: 'header-row',
                width: 170,
                editable: true,
            },
            {
                field: 'product_sell_price',
                headerName: 'Cake price',
                headerClassName: 'header-row',
                width: 100,
                editable: true,
            },
            {
                field: 'product_quantity',
                headerName: 'Cake quantity',
                headerClassName: 'header-row',
                width: 100,
            },
            {
                field: 'product_description',
                headerName: 'Cake description',
                headerClassName: 'header-row',
                flex: 1,
                editable: true,
            },
            {
                field: 'product_thumb',
                headerName: 'Product thumbnail',
                width: 60,
                renderCell: (params) => <Avatar src={params.row.product_thumb} sx={{ mt: '12px' }} />,
                headerClassName: 'header-row',
                sortable: false,
                filterable: false,
                editable: true,
            },
            {
                field: 'actions',
                headerName: 'Actions',
                headerClassName: 'header-row',

                type: 'actions',
                renderCell: (params) => <CakeActions {...{ params, rowId, setRowId }} />,
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
                Manage products
            </Typography>
            <DataGrid
                columns={columns}
                rows={products}
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

export default CakeManagement;
