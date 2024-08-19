import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Auth.module.scss';

import LoginForm from 'features/Auth/Login/LoginForm';
import images from 'assets/images';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'features/Auth/userSlice';

const cx = classNames.bind(styles);

function Login() {
    const dispatch = useDispatch();
    const error = useSelector((state) => state.user.error);

    const hanldeSubit = async (values) => {
        try {
            await dispatch(login(values));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={cx('wrapper', 'login')}>
            <img className={cx('logo')} src={images.logo} alt="logo" />
            <div className={cx('container', 'login-container')}>
                <h1 className={cx('header')}>login</h1>
                <div className={cx('form')}>
                    {error && <span className={cx('error')}>{error}</span>}
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
