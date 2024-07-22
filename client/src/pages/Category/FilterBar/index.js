import classNames from 'classnames/bind';

import styles from './FilterBar.module.scss';

import * as filters from 'constants/categoryFilters';

const cx = classNames.bind(styles);

function FilterBar() {
    for (let key in filters) {
        console.log(filters[key]);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter-block')}>
                <span className={cx('filter-title')}>Type</span>
                <ul className={cx('filter-list')}>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default FilterBar;
