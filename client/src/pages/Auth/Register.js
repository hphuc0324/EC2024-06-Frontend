import classNames from 'classnames/bind';

import RegisterForm from 'features/Auth/Register/RegisterForm';
import styles from './Auth.module.scss';
import images from 'assets/images';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Register() {
    const hanldeSubit = () => {};

    return (
        <div className={cx('wrapper')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <div className={cx('container', 'register-container')}>
                <h1 className={cx('header')}>register</h1>
                <div className={cx('form')}>
                    <RegisterForm onSubmit={hanldeSubit} />

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
