import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import useQuery from 'hooks/useQuery';
import { useEffect, useState } from 'react';
import ProductList from 'features/Product/ProductList';
import productApi from 'api/productApi';
import { showToast } from 'components/ToastMessage';

const cx = classNames.bind(styles);

function Search() {
    const query = useQuery();
    const name = query.get('name');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const handleFetchProducts = async () => {
            try {
                const res = await productApi.search(name);

                setProducts(res.data.metadata);
            } catch (error) {
                showToast(error);
            }
        };

        handleFetchProducts();
    }, [name]);

    return (
        <div className={cx('wrapper')}>
            <span>
                Home / <b>Search</b>
            </span>
            <div className={cx('content')}>
                <span className={cx('search-title')}>Result</span>
                {products.length !== 0 && (
                    <span
                        className={cx('search-details')}
                    >{`There are ${products.length} products for your search`}</span>
                )}
                {products.length === 0 && (
                    <span
                        className={cx('search-details')}
                    >{`There are no products for your search! Please try again`}</span>
                )}
                <ProductList products={products} itemPerRow={1} productLayout="horizontal" />
            </div>
        </div>
    );
}

export default Search;
