import ProductDetails from 'features/Product/ProductDetails';
import ProductList from 'features/Product/ProductList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import productApi from 'api/productApi';

const cx = classNames.bind(styles);

function Product() {
    const { _id } = useParams();
    const [productConfig, setProductConfig] = useState({
        _id: _id,
        quantity: 1,
        size: 'small',
    });

    const [product, setProduct] = useState();

    const [reviews, setReviews] = useState({
        data: [1, 2, 3, 4],
        count: 4,
        page: 1,
        limit: 2,
    });

    const handleChangeReviewPage = (value) => {
        setReviews((prev) => ({ ...prev, page: value }));
    };

    useEffect(() => {
        const handleFetchProduct = async () => {
            const res = await productApi.get(_id);
            setProduct(res.data.metadata);
        };

        handleFetchProduct();
    }, [_id]);

    return (
        <div className={cx('wrapper')}>
            {product && (
                <ProductDetails
                    product={product}
                    productConfig={productConfig}
                    setProductConfig={setProductConfig}
                    reviews={reviews.data}
                    reviewsCount={Math.ceil(reviews.count / reviews.limit)}
                    onReviewPageChange={handleChangeReviewPage}
                />
            )}
            {/* <ProductList products={[1, 2, 3, 4, 5, 6]} itemPerRow={3} /> */}
        </div>
    );
}

export default Product;
