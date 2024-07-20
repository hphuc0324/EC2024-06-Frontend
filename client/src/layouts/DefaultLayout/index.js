import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';

import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import NavBar from 'components/NavBar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <SearchBar />
            <NavBar />

            <div className={cx('content')}>{children}</div>

            {/* Footer */}
        </div>
    );
}

export default DefaultLayout;
