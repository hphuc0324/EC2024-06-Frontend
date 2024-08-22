import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './OtherActions.module.scss';
import { useDispatch, useSelector } from 'react-redux';

import Menu from 'components/Popper/Menu';
import { GUEST_MENU } from 'constants/general';
import { logout } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';

const cx = classNames.bind(styles);

function OtherActions() {
    const user = useSelector((state) => state.user.current);

    const dispatch = useDispatch();

    const actions = [
        {
            label: 'Profile',

            to: '/profile',
        },
        {
            label: 'Logout',

            onClick: async () => {
                try {
                    const action = await dispatch(logout());

                    const resultAction = unwrapResult(action);
                } catch (err) {
                    console.log(err);
                }
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('action')}>
                <Link to="/cart" className={cx('action-icon')}>
                    <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
                <span className={cx('action-label')}>Cart</span>
            </div>

            <Menu items={user ? actions : GUEST_MENU}>
                <div className={cx('action')}>
                    <span className={cx('action-icon')}>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <span className={cx('action-label')}>Account</span>
                    <span className={cx('action-down-icon')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </div>
            </Menu>
        </div>
    );
}

export default OtherActions;
