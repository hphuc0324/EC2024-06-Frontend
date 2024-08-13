import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ProductSection.module.scss';
import images from 'assets/images';
import { Rating } from '@mui/material';
import { toVND } from 'utils/currencyConverter';
import Button from 'components/Button';

const cx = classNames.bind(styles);

ProductSection.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,

    onSizeChange: PropTypes.func.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    onAddToCart: PropTypes.func,
    onBuy: PropTypes.func,
};

function ProductSection(props) {
    const { product, quantity, size, onSizeChange, onQuantityChange, onAddToCart, onBuy } = props;

    const handleSizeChange = (value) => {
        onSizeChange(value);
    };

    const handleQuantityChange = (value) => {
        onQuantityChange(value);
    };

    return (
        <div className={cx('product-section')}>
            <img className={cx('product-cover')} src={product.product_thumb} />
            <div className={cx('product-info')}>
                <span className={cx('product-name')}>{product.product_name}</span>
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
                        <span className={cx('product-new-price', 'col-title')}>{toVND(200)}</span>
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
                                <span className={cx('product-content-line')}>{product.product_description}</span>
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
                            classNames={cx('choice-btn', 'size-btn', { active: size === 'small' })}
                            callback={() => handleSizeChange('small')}
                        >
                            Small
                        </Button>
                        <Button
                            classNames={cx('choice-btn', 'size-btn', { active: size === 'medium' })}
                            callback={() => handleSizeChange('medium')}
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
                            disabled={quantity <= 0}
                            callback={() => handleQuantityChange(-1)}
                        >
                            -
                        </Button>
                        <span className={cx('product-quantity')}>{quantity}</span>
                        <Button rounded classNames={cx('quantity-btn')} callback={() => handleQuantityChange(+1)}>
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
        </div>
    );
}

export default ProductSection;
