import { Box, Avatar, Typography } from '@mui/material';
import { showToast } from 'components/ToastMessage';
import { useEffect, useMemo, useState } from 'react';
import { CircularProgress, Fab } from '@mui/material';
import { Check, Save } from '@mui/icons-material';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import categoryApi from 'api/categoryApi';

const CategoyActions = ({ params, rowId, setRowId }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (rowId === params.id && success) setSuccess(false);
    }, [rowId]);

    const handleSubmit = async () => {
        const { name, isActive } = params.row;

        try {
            setLoading(true);

            const res = await categoryApi.update(rowId, { category_name: name, isActive });
            console.log(res);
            showToast('Success', 'Updated category successfully');
            setLoading(false);
        } catch (error) {
            setLoading(false);

            showToast('Error', 'Error while updating category');
        }
    };

    const handleDelete = async () => {
        try {
            const res = await categoryApi.delete(rowId);

            showToast('Success', 'Deleted category successfully');
        } catch (error) {
            showToast('Error', 'Error while deleting category');
        }
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

            <Fab
                sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    marginLeft: '10px',
                }}
                onClick={handleDelete}
            >
                <DeleteIcon
                    sx={{
                        color: 'white',
                    }}
                />
            </Fab>
        </Box>
    );
};

function CategoryManagement() {
    const [categories, setCategories] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const [rowId, setRowId] = useState(null);

    const columns = useMemo(
        () => [
            {
                field: '_id',
                headerName: 'Category ID',
                headerClassName: 'header-row',
                width: 170,
            },
            {
                field: 'name',
                headerName: 'Category name',
                headerClassName: 'header-row',
                editable: true,
                width: 170,
            },
            {
                field: 'isActive',
                headerName: 'Is Category active',
                headerClassName: 'header-row',
                width: 170,
            },
            {
                field: 'actions',
                headerName: 'Actions',
                headerClassName: 'header-row',
                flex: 1,
                type: 'actions',
                renderCell: (params) => <CategoyActions {...{ params, rowId, setRowId }} />,
            },
        ],
        [rowId],
    );

    useEffect(() => {
        const handleFetchCategories = async () => {
            try {
                const res = await categoryApi.getAll();

                setCategories(res.data.metadata);
            } catch (error) {
                showToast('Error', 'Error while fetching categories');
            }
        };

        handleFetchCategories();
    }, []);

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
                rows={categories}
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

                    return newRow;
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

export default CategoryManagement;
