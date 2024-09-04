import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { Pagination } from '@mui/material';

import classNames from 'classnames/bind';
import styles from './Category.module.scss';

import useQuery from 'hooks/useQuery';
import ProductList from 'features/Product/ProductList';
import FilterBar from './FilterBar';

import productApi from 'api/productApi';

const cx = classNames.bind(styles);

function Category() {
    const location = useLocation();
    const navigate = useNavigate();
    const query = useQuery();

    const [products, setProducts] = useState([]);

    const [filters, setFilters] = useState({
        category: '',
        price: {},
        page: 1,
        limit: 9,
    });

    //Sync filters to URL
    const handleFilterChange = (value, name) => {
        //Delete filters if already present
        if (query.get(name) === value) {
            query.delete(name);
        } //Add filters
        else {
            if (name === 'price') {
                if (query.get('min') === value.min && query.get('max') === value.max) {
                    query.delete('min');
                    query.delete('max');
                } else {
                    query.set('min', value.min);
                    query.set('max', value.max);
                }
            } else {
                query.set(name, value);
            }
        }

        navigate(`?${query.toString()}`, { replace: true });
    };

    //Update filters based on URL query parameters
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            category: query.get('category') || undefined,
            price: {
                min: query.get('min'),
                max: query.get('max'),
            },
        }));
    }, [location.search]);

    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            category: query.get('category') || undefined,
            price: {
                min: query.get('min'),
                max: query.get('max'),
            },
        }));
    }, []);

    useEffect(() => {
        const handleFetchProducts = async () => {
            try {
                const cleaned = { product_category: filters.category, price: filters.price };
                if (!cleaned.product_category) delete cleaned.product_category;

                const res = await productApi.getAll(cleaned);
                setProducts(res.data.metadata);
            } catch (err) {
                console.log(err);
            }
        };

        handleFetchProducts();
    }, [filters]);

    return (
        <div className={cx('wrapper')}>
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
            <div className={cx('products')}>
                <ProductList itemPerRow={3} products={products} />
                <Pagination
                    sx={{
                        '& .MuiButtonBase-root.MuiPaginationItem-root': {
                            fontSize: '1.3rem',
                        },
                    }}
                    className={cx('pagination-bar')}
                    count={5}
                    size="large"
                    onChange={(e, value) => setFilters((prev) => ({ ...prev, page: value }))}
                />
            </div>
        </div>
    );
}

export default Category;
