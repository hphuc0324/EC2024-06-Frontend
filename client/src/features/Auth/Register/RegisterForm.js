import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import styles from './RegisterForm.module.scss';
import classNames from 'classnames/bind';

import InputField from 'components/FormControls/InputField';
import SelectField from 'components/FormControls/SelectField';
import Button from 'components/Button';

import { NUMBER_REGEX } from 'constants/inputFormat';
import { GENDERS } from 'constants/general';
const cx = classNames.bind(styles);

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function RegisterForm(props) {
    const schema = yup.object().shape({
        email: yup.string().email('Please enter a valid email').required('Please enter your email'),
        name: yup.string().required('Please enter your name').max(50, 'Max length is 50 chracters!'),
        phoneNumber: yup
            .string()
            .matches(NUMBER_REGEX, 'Pleas enter a valid phonenumber')
            .max(10, 'Please enter a valid phonenumber')
            .min(10, 'Please enter a valid phonenumber')
            .required('Please enter your phone number'),
        password: yup.string().required('Please enter your password'),
        confirmPassword: yup
            .string()
            .required('Please enter your confirm password')
            .oneOf([yup.ref('password')], "Password doesn't match"),
        gender: yup.string().required('Please enter your gender'),
    });

    const form = useForm({
        defaultValues: {
            email: '',
            name: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            gender: 'male',
        },

        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        console.log(values);
        const { onSubmit } = props;

        await onSubmit(values);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className={cx('register-form')}>
            <div className={cx('register-input')}>
                <InputField form={form} name="email" label="Email" placeholder="Email" />
            </div>

            <div className={cx('register-input')}>
                <InputField form={form} name="name" label="Name" placeholder="Name" />
            </div>

            <div className={cx('register-input')}>
                <InputField form={form} name="phoneNumber" label="Phone number" placeholder="Phone number" />
            </div>
            <div className={cx('register-input')}>
                <SelectField form={form} name="gender" label="Gender" placeholder="Gender" choices={GENDERS} />
            </div>
            <div className={cx('register-input')}>
                <InputField form={form} name="password" inputType="password" label="Password" placeholder="Password" />
            </div>
            <div className={cx('register-input')}>
                <InputField
                    form={form}
                    name="confirmPassword"
                    label="Confirm password"
                    placeholder="Confirm password"
                    inputType="password"
                />
            </div>

            <Button buttonType="submit" fullLength classNames={cx('submit-btn')}>
                Register
            </Button>
        </form>
    );
}

export default RegisterForm;
