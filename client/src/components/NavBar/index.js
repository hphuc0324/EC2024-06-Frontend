import classNames from 'classnames/bind';

import styles from './NavBar.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import Menu from 'components/Popper/Menu';
import { CAKE_CATEGORIES } from 'constants/general';
import { useEffect, useState } from 'react';
import categoryApi from 'api/categoryApi';
import { showToast } from 'components/ToastMessage';

const cx = classNames.bind(styles);

function NavBar() {
    const location = useLocation();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const handleFetchCategories = async () => {
            try {
                const res = await categoryApi.getAll();
                const categoriesMapped = res.data.metadata.map((category) => ({
                    ...category,
                    to: `/category?category=${category._id}`,
                    label: category.name,
                }));

                setCategories(categoriesMapped);
            } catch (error) {
                showToast('Error', 'Error while fetching categories. Please try again later');
            }
        };

        handleFetchCategories();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('nav-item', { active: location.pathname === '/' })} to="/">
                Home
            </Link>
            <Link className={cx('nav-item', { active: location.pathname === '/about' })} to="/about">
                About us
            </Link>

            <Menu items={categories}>
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
