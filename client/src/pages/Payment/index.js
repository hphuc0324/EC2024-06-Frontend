import { districtApi, wardApi } from 'api/cityApi';
import orderApi from 'api/orderApi';
import Map from 'components/Map';
import { showToast } from 'components/ToastMessage';
import PaymentForm from 'features/Payment/PaymentForm';
import { useEffect, useState } from 'react';

function Payment() {
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [order, setOrder] = useState(null);

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

    console.log(order);

    const handleDistrictChange = async (district) => {
        const res = await wardApi.getAll(district);

        const parsedWards = res.data.results.map((ward) => ({
            value: ward.ward_id,
            label: ward.ward_name,
        }));

        setWards(parsedWards);
    };

    return (
        <>
            {order ? (
                <PaymentForm
                    order={order}
                    onSubmit={(values) => console.log(values)}
                    products={[1, 2]}
                    districts={districts}
                    wards={wards}
                    onDistrictChange={handleDistrictChange}
                />
            ) : null}
        </>
    );
}

export default Payment;
