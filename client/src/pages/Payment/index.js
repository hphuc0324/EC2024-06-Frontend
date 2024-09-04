import { districtApi, wardApi } from 'api/cityApi';
import orderApi from 'api/orderApi';
import Map from 'components/Map';
import { showToast } from 'components/ToastMessage';
import PaymentForm from 'features/Payment/PaymentForm';
import { useEffect, useState } from 'react';
import CartList from 'features/Cart/CartList';
import { toVND } from 'utils/currencyConverter';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Payment() {
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [order, setOrder] = useState(null);
    const [done, setDone] = useState(false);

    const [orderInfo, setOrderInfo] = useState();

    useEffect(() => {
        const handleFetchDistricts = async () => {
            const res = await districtApi.getAll();

            const parsedDistricts = res.data.results.map((district) => ({
                value: district.district_id,
                label: district.district_name,
            }));

            setDistricts(parsedDistricts);
        };
        handleFetchDistricts();
    }, []);

    useEffect(() => {
        const handleFetchOrder = async () => {
            try {
                const res = await orderApi.checkoutOverview();

                setOrder(res.data.metadata);
            } catch (error) {
                showToast('Error', 'Error while fetching checkout overview');
            }
        };

        handleFetchOrder();
    }, []);

    const handleStep1Submit = (values) => {
        setOrderInfo(values);
    };

    const handleStep2Submit = async (values) => {
        const method = values;

        if (method === 'cash') {
            try {
                const res = await orderApi.checkoutCash(orderInfo.address);

                showToast('Success', 'Order created successfully');
                setOrder(res.data.metadata);
                setDone(true);
            } catch (error) {
                showToast('Error', 'Error while creating order! Please try again later');
            }
        } else {
            try {
                const res = await orderApi.checkoutZaloPay(orderInfo.address);
                console.log('Response', res);
                window.open(res.data.metadata);
            } catch (error) {
                showToast('Error', 'Error while processing payment');
            }
        }
    };

    const handleDistrictChange = async (district) => {
        const res = await wardApi.getAll(district);

        const parsedWards = res.data.results.map((ward) => ({
            value: ward.ward_id,
            label: ward.ward_name,
        }));

        setWards(parsedWards);
    };

    if (done) {
        return (
            <Box display="flex" padding="32px">
                <Box
                    sx={{
                        width: '50%',
                        padding: '16px 8px',
                    }}
                >
                    <Box display="flex">
                        <CheckCircleIcon
                            sx={{
                                '&.MuiSvgIcon-root': { fontSize: '48px' },
                            }}
                        />
                        <Box ml="16px">
                            <Typography
                                sx={{
                                    color: '#fb6e7f',
                                    fontSize: '20px',
                                }}
                            >
                                Order sucess
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '16px',
                                }}
                            >
                                Order ID: {order._id}
                            </Typography>
                        </Box>
                    </Box>

                    <Box
                        padding="16px 8px"
                        sx={{
                            border: '1px solid black',
                            borderRadius: '2px',
                        }}
                    >
                        <Typography variant="h4">Order Information</Typography>
                        <Typography my="16px" fontSize="14px">
                            Name: {order.order_user.name}
                        </Typography>
                        <Typography my="16px" fontSize="14px">
                            Price: {order.order_totalPrice}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: '50%',
                    }}
                >
                    <CartList cartItems={order.order_listProducts} allowEdit={false} />
                    <span>
                        <b>Sub total</b>: {toVND(order.order_totalPrice)}
                    </span>
                </Box>
            </Box>
        );
    }

    return (
        <>
            {order ? (
                <PaymentForm
                    order={order}
                    onStep1Submit={handleStep1Submit}
                    onStep2Submit={handleStep2Submit}
                    districts={districts}
                    wards={wards}
                    onDistrictChange={handleDistrictChange}
                />
            ) : null}
        </>
    );
}

export default Payment;
