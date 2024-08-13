import { districtApi, wardApi } from 'api/cityApi';
import PaymentForm from 'features/Payment/PaymentForm';
import { useEffect, useState } from 'react';

function Payment() {
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);

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

    const handleDistrictChange = async (district) => {
        const res = await wardApi.getAll(district);

        const parsedWards = res.data.results.map((ward) => ({
            value: ward.ward_id,
            label: ward.ward_name,
        }));

        setWards(parsedWards);
    };

    return (
        <PaymentForm
            onSubmit={(values) => console.log(values)}
            products={[1, 2]}
            districts={districts}
            wards={wards}
            onDistrictChange={handleDistrictChange}
        />
    );
}

export default Payment;
