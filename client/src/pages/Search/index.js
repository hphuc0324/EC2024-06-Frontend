import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import useQuery from 'hooks/useQuery';
import { useEffect } from 'react';
import ProductList from 'features/Product/ProductList';

const cx = classNames.bind(styles);

function Search() {
    const query = useQuery();

    useEffect(() => {
        console.log(query.get('name'));
    }, [query]);

    return (
        <div className={cx('wrapper')}>
            <span>
                Home / <b>Search</b>
            </span>
            <div className={cx('content')}>
                <span className={cx('search-title')}>Result</span>
                <span className={cx('search-details')}>There is 1 product for your search</span>

                <ProductList products={[1, 2, 3, 5]} itemPerRow={1} productLayout="horizontal" />
            </div>
        </div>
    );
}

export default Search;
