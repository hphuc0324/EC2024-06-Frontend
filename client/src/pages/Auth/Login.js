import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Auth.module.scss';

import LoginForm from 'features/Auth/Login/LoginForm';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Login() {
    const hanldeSubit = () => {
        console.log('submit');
    };

    return (
        <div className={cx('wrapper', 'login')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <div className={cx('container', 'login-container')}>
                <h1 className={cx('header')}>login</h1>
                <div className={cx('form')}>
                    <LoginForm onSubmit={hanldeSubit} />

                    <div className={cx('others')}>
                        <span>Don't have an account?</span>
                        <Link to="/auth/register" className={cx('others-link')}>
                            Register
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
