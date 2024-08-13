import ProductDetails from 'features/Product/ProductDetails';
import ProductList from 'features/Product/ProductList';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
    const { _id } = useParams();
    const [productConfig, setProductConfig] = useState({
        _id: _id,
        quantity: 1,
        size: 'small',
    });

    const [reviews, setReviews] = useState({
        data: [1, 2, 3, 4],
        count: 4,
        page: 1,
        limit: 2,
    });

    const handleChangeReviewPage = (value) => {
        setReviews((prev) => ({ ...prev, page: value }));
    };

    return (
        <div className={cx('wrapper')}>
            <ProductDetails
                product={{}}
                productConfig={productConfig}
                setProductConfig={setProductConfig}
                reviews={reviews.data}
                reviewsCount={Math.ceil(reviews.count / reviews.limit)}
                onReviewPageChange={handleChangeReviewPage}
            />
            <ProductList products={[1, 2, 3, 4, 5, 6]} itemPerRow={3} />
        </div>
    );
}

export default Product;
