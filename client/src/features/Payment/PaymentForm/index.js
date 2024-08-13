import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import * as yup from 'yup';

import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './PaymentForm.module.scss';
import InputField from 'components/FormControls/InputField';
import { NUMBER_REGEX } from 'constants/inputFormat';
import SelectField from 'components/FormControls/SelectField';
import Button from 'components/Button';
import CartList from 'features/Cart/CartList';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { showToast } from 'components/ToastMessage';

const cx = classNames.bind(styles);

PaymentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,

    districts: PropTypes.array.isRequired,
    wards: PropTypes.array.isRequired,
    onDistrictChange: PropTypes.func.isRequired,
};

function PaymentForm(props) {
    const [step, setStep] = useState(1);

    const user = useSelector((state) => state.user);

    const { onSubmit, products, onDistrictChange, districts, wards } = props;

    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        phoneNumber: yup
            .string()
            .required('Phone number is required')
            .matches(NUMBER_REGEX, 'Invalid phone number')
            .min(10, 'Phone number must have 10 digits')
            .max(10, 'Phone number must have 10 digits'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        address: yup.object().shape({
            houseNumber: yup.string().required('House number is required'),
            city: yup.string(), //.required('City is required'),
            district: yup.string(), //.required('District is required'),
            ward: yup.string(), //.required('Ward is required'),
        }),
    });

    const form = useForm({
        defaultValues: {
            name: user ? user.name : '',
            phoneNumber: user ? user.phoneNumber : '',
            email: user ? user.email : '',
            address: {
                houseNumber: '',
                city: 'Ho Chi Minh City',
                district: '',
                ward: '',
            },
        },

        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        await onSubmit(values);
    };

    const hanldeDistrictChange = async (e) => {
        const district = e.target.value;

        onDistrictChange(district);
    };

    const hanldeShowToast = () => {
        showToast('hi', 'ngu');
    };

    return (
        <div className={`grid ${cx('wrapper')}`}>
            <div className={`row ${cx('payment-content')}`}>
                <form className="col c-6 row" onSubmit={form.handleSubmit(handleSubmit)}>
                    <InputField name="name" placeholder="Name" form={form} classNames={`col c-6 ${cx('form-input')}`} />
                    <InputField
                        name="phoneNumber"
                        placeholder="Phone number"
                        form={form}
                        classNames={`col c-5 ${cx('form-input')}`}
                    />
                    <InputField
                        name="email"
                        placeholder="Email"
                        form={form}
                        classNames={`col c-12 ${cx('form-input')}`}
                    />

                    <div className={`col c-12 ${cx('form-field')} row`}>
                        <InputField
                            name="address.houseNumber"
                            placeholder="House number"
                            form={form}
                            classNames={`col c-12 ${cx('form-input')}`}
                        />
                        <InputField
                            readOnly
                            name="address.city"
                            placeholder="City"
                            form={form}
                            classNames={`col c-3 ${cx('form-input')}`}
                        />

                        <SelectField
                            name="address.district"
                            placeholder="District"
                            choices={districts}
                            onChange={hanldeDistrictChange}
                            form={form}
                            classNames={`col c-3 ${cx('form-input')}`}
                        />
                        <SelectField
                            name="address.ward"
                            placeholder="Ward"
                            choices={wards}
                            form={form}
                            classNames={`col c-3 ${cx('form-input')}`}
                        />
                    </div>

                    <div className={cx('action')}>
                        <Link to="/cart">
                            <FontAwesomeIcon icon={faCartShopping} />
                            Cart
                        </Link>

                        <Button buttonType="submit" classNames={cx('submit-btn')}>
                            Continue to payment method
                        </Button>
                    </div>
                </form>

                <div className="col c-6">
                    <CartList cartItems={products} allowEdit={false} />
                </div>
            </div>
        </div>
    );
}
export default PaymentForm;
