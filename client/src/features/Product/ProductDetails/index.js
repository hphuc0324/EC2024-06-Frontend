import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ProductDetails.module.scss';
import { useParams } from 'react-router-dom';

import ProductSection from './ProductSection';
import ReviewSection from './ReviewSection';
import ProductList from '../ProductList';

const cx = classNames.bind(styles);

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
    productConfig: PropTypes.object.isRequired,
    setProductConfig: PropTypes.func.isRequired,

    reviews: PropTypes.array.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    onReviewPageChange: PropTypes.func.isRequired,
};

function ProductDetails(props) {
    const { product, productConfig, setProductConfig, reviews, reviewsCount, onReviewPageChange } = props;

    const handleQuantityChange = (value) => {
        setProductConfig((prev) => ({ ...prev, quantity: prev.quantity + value }));
    };

    const handleSizeChange = (value) => {
        setProductConfig((prev) => ({ ...prev, size: value }));
    };

    return (
        <div className={cx('wrapper')}>
            {product && (
                <ProductSection
                    product={product}
                    quantity={productConfig.quantity}
                    size={productConfig.size}
                    onQuantityChange={handleQuantityChange}
                    onSizeChange={handleSizeChange}
                />
            )}

            {product && (
                <ReviewSection
                    product={product}
                    reviews={reviews}
                    reviewsCount={reviewsCount}
                    onReviewPageChange={onReviewPageChange}
                />
            )}

            <span className={cx('related-title')}>RELATED PRODUCTS</span>
        </div>
    );
}

export default ProductDetails;
