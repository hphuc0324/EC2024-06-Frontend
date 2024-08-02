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
            {/* <div className={cx('product-section')}>
                <img className={cx('product-cover')} src={images.homePanels[0]} />
                <div className={cx('product-info')}>
                    <span className={cx('product-name')}>PINKY CAKE</span>
                    <div className={cx('product-review', 'flex-item')}>
                        <div className={cx('left-col')}>
                            <Rating value={4.5} readOnly size="large" precision={0.1} />
                        </div>
                        <div className={cx('right-col')}>
                            <span className={cx('product-review-count')}>45 Reviews</span>
                        </div>
                    </div>

                    <div className={cx('product-price', 'flex-item')}>
                        <div className={cx('left-col')}>
                            <span className={cx('product-new-price', 'col-title')}>{toVND(200000)}</span>
                        </div>
                        <div className={cx('right-col')}>
                            <span className={cx('product-old-price')}>{toVND(250000)}</span>
                        </div>
                    </div>

                    <div className={cx('product-description', 'flex-item')}>
                        <div className={cx('left-col')}>
                            <span className={cx('product-new-price', 'col-title')}>Description</span>
                        </div>
                        <div className={cx('right-col')}>
                            <div className={cx('right-col')}>
                                <div className={cx('product-content')}>
                                    <span className={cx('product-content-line')}>
                                        {' '}
                                        Type:
                                        300grsafdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdasdddddddddddddddddddsaddddddddddd
                                    </span>
                                    <span className={cx('product-content-line')}>{toVND(250000)}</span>
                                    <span className={cx('product-content-line')}>{toVND(250000)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('product-size', 'flex-item')}>
                        <div className={cx('left-col')}>
                            <span className={cx('col-title')}>Size</span>
                        </div>

                        <div className={cx('right-col')}>
                            <Button
                                classNames={cx('choice-btn', 'size-btn', { active: productConfig.size === 'small' })}
                                callback={() =>
                                    setProductConfig((prev) => ({
                                        ...prev,
                                        size: 'small',
                                    }))
                                }
                            >
                                Small
                            </Button>
                            <Button
                                classNames={cx('choice-btn', 'size-btn', { active: productConfig.size === 'medium' })}
                                callback={() =>
                                    setProductConfig((prev) => ({
                                        ...prev,
                                        size: 'medium',
                                    }))
                                }
                            >
                                Medium
                            </Button>
                        </div>
                    </div>

                    <div className={cx('flex-item')}>
                        <div className={cx('left-col')}>
                            <span className={cx('col-title')}>Quantity</span>
                        </div>
                        <div className={cx('product-quantity-controller', 'right-col')}>
                            <Button
                                rounded
                                classNames={cx('quantity-btn')}
                                disabled={productConfig.quantity <= 0}
                                callback={() =>
                                    setProductConfig((prev) => ({
                                        ...prev,
                                        quantity: prev.quantity - 1,
                                    }))
                                }
                            >
                                -
                            </Button>
                            <span className={cx('product-quantity')}>{productConfig.quantity}</span>
                            <Button
                                rounded
                                classNames={cx('quantity-btn')}
                                callback={() =>
                                    setProductConfig((prev) => ({
                                        ...prev,
                                        quantity: prev.quantity + 1,
                                    }))
                                }
                            >
                                +
                            </Button>
                        </div>
                    </div>

                    <div className={cx('flex-item')}>
                        <Button fullWidth classNames={cx('choice-btn', 'buy-btn')}>
                            ADD TO CART
                        </Button>
                        <Button classNames={cx('choice-btn', 'active', 'buy-btn')}>BUY NOW</Button>
                    </div>
                </div>
            </div> */}
            <ProductSection
                product={{}}
                quantity={productConfig.quantity}
                size={productConfig.size}
                onQuantityChange={handleQuantityChange}
                onSizeChange={handleSizeChange}
            />

            <ReviewSection reviews={reviews} reviewsCount={reviewsCount} onReviewPageChange={onReviewPageChange} />

            <span className={cx('related-title')}>RELATED PRODUCTS</span>
            <ProductList products={[1, 2, 3, 4, 5, 6]} itemPerRow={3} />
        </div>
    );
}

export default ProductDetails;
