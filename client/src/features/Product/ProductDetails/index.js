import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './ProductDetails.module.scss';
import images from 'assets/images';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import { toVND } from 'utils/currencyConverter';
import Button from 'components/Button';
import ProductSection from './ProductSection';
import ReviewSection from './ReviewSection';

const cx = classNames.bind(styles);

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
};

function ProductDetails(props) {
    const { _id } = useParams();
    const [productConfig, setProductConfig] = useState({
        _id: _id,
        quantity: 1,
        size: 'small',
    });

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
            <div className={cx('review-section')}>
                <ReviewSection />
            </div>
        </div>
    );
}

export default ProductDetails;
