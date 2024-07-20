import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import PropTypes from 'prop-types';

import InputField from 'components/FormControls/InputField';
import Button from 'components/Button';

const cx = classNames.bind(styles);

ContactForm.propsTypes = {
    onSubmit: PropTypes.func.isRequired,
};

function ContactForm(props) {
    const schema = yup.object().shape({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Invalid email format').required('Email is required'),
        subject: yup.string().required('Subject is required'),
        message: yup.string().required('Message is required'),
    });

    const form = useForm({
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;

        await onSubmit(values);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField form={form} classNames={cx('form-input')} label="Your name" name="name" />
            <InputField form={form} classNames={cx('form-input')} label="Your email" name="email" />
            <InputField form={form} classNames={cx('form-input')} label="Subject" name="subject" />
            <InputField form={form} classNames={cx('form-input')} label="Your message" name="message" />

            <Button type="submit" classNames={cx('submit-btn')}>
                Submit
            </Button>
        </form>
    );
}

export default ContactForm;
