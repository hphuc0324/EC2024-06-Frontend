import classNames from 'classnames/bind';

import RegisterForm from 'features/Auth/Register/RegisterForm';
import styles from './Auth.module.scss';
import images from 'assets/images';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const cx = classNames.bind(styles);

function Register() {
    const error = useSelector((state) => state.user.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        try {
            console.log('into');
            const action = await dispatch(signUp(values));

            const resultAction = unwrapResult(action);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <div className={cx('container', 'register-container')}>
                <h1 className={cx('header')}>register</h1>
                <div className={cx('form')}>
                    {error && <span className={cx('error')}>{error}</span>}
                    <RegisterForm onSubmit={handleSubmit} />

                    <div className={cx('others')}>
                        <span>Already have account?</span>
                        <Link to="/auth/login" className={cx('others-link')}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
