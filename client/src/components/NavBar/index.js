import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Menu from 'components/Popper/Menu';
import { CAKE_CATEGORIES } from 'constants/general';

const cx = classNames.bind(styles);

function NavBar() {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('nav-item', { active: location.pathname === '/' })} to="/">
                Home
            </Link>
            <Link className={cx('nav-item', { active: location.pathname === '/about' })} to="/about">
                About us
            </Link>

            <Menu items={CAKE_CATEGORIES}>
                <Link className={cx('nav-item', { active: location.pathname === '/category' })} to="/">
                    Category
                    <span className={cx('nav-item-icon')}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </span>
                </Link>
            </Menu>

            <Link className={cx('nav-item', { active: location.pathname === '/contact' })} to="/contact">
                Contact
            </Link>
        </div>
    );
}

export default NavBar;
