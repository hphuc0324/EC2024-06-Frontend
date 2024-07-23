import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import { useState, useEffect } from 'react';
import FilterBar from './FilterBar';
import { useLocation, useNavigate } from 'react-router-dom';
import useQuery from 'hooks/useQuery';

const cx = classNames.bind(styles);

function Category() {
    const location = useLocation();
    const navigate = useNavigate();

    const [filters, setFilters] = useState({
        type: '',
        flavor: '',
        size: '',
        shape: '',
        price: {},
    });

    const query = useQuery();
    //Sync filters to URL
    const handleFilterChange = (value, name) => {
        if (name === 'price') {
            query.set('min', value.min);
            query.set('max', value.max);
        } else {
            query.set(name, value);
        }

        navigate(`?${query.toString()}`, { replace: true });
    };

    //Update filters based on URL query parameters
    useEffect(() => {
        setFilters({
            type: query.get('type') || '',
            flavor: query.get('flavor') || '',
            size: query.get('size') || '',
            shape: query.get('shape') || '',
            price: {
                min: query.get('min'),
                max: query.get('max'),
            },
        });
    }, [location.search]);

    return (
        <div className={cx('wrapper')}>
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        </div>
    );
}

export default Category;
