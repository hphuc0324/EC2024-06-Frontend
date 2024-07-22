import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import { useState, useEffect } from 'react';
import useQuery from 'hooks/useQuery';
import FilterBar from './FilterBar';

const cx = classNames.bind(styles);

function Category() {
    const [filters, setFilters] = useState({});

    const query = useQuery();

    console.log(filters);

    useEffect(() => {
        setFilters(query.get('type'));
    }, [query]);

    return (
        <div className={cx('wrapper')}>
            <FilterBar />
        </div>
    );
}

export default Category;
