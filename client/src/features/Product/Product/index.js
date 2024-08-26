import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from 'assets/images';
import { toVND } from 'utils/currencyConverter';
import decreaseByPercent from 'utils/decreaseByPercent';

import styles from './Product.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/cartSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { showToast } from 'components/ToastMessage';
const cx = classNames.bind(styles);

Product.propTypes = {
    product: PropTypes.object,
    layout: PropTypes.string,
};

function Product(props) {
    const { product, layout = 'vertical' } = props;
    const dispatch = useDispatch();

    const handleAddToCart = async () => {
        try {
            const action = await dispatch(addToCart({ productId: product._id, quantity: 1 }));

            const resultAction = unwrapResult(action);
            showToast('Success', 'Product added to cart successfully!');
        } catch (error) {
            showToast('Error', error);
        }
    };

    return (
        <Link
            to={`/product/${product._id}`}
            className={cx('wrapper', { horizontal: layout !== 'vertical' })}
            onClick={(e) => {
                if (e.target.closest('.span-button')) {
                    e.preventDefault();
                }
            }}
        >
            {product.product_list_price !== undefined && <div className={cx('product-discount-tag')}>{'15%'}</div>}
            <img src={product.product_thumb} className={cx('product-cover')} />
            <div className={cx('product-info', { horizontal: layout !== 'vertical' })}>
                <div className={cx('product-detail')}>
                    <span className={cx('product-name')}>{product.product_name}</span>
                    {layout !== 'vertical' && (
                        <span className={cx('product-description')}>{product.product_description}</span>
                    )}
                    <div className={cx('product-prices')}>
                        <span className={cx('product-new-price')}>{toVND(product.product_sell_price)}</span>
                        {product.product_list_price && (
                            <span className={cx('product-old-price')}>({toVND(product.product_list_price)})</span>
                        )}
                    </div>
                </div>
                <span className="span-button" onClick={handleAddToCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </div>
        </Link>
    );
}

export default Product;
