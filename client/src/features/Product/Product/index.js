import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import images from 'assets/images';
import { toVND } from 'utils/currencyConverter';
import decreaseByPercent from 'utils/decreaseByPercent';

import styles from './Product.module.scss';
const cx = classNames.bind(styles);

Product.propTypes = {
    product: PropTypes.object,
    layout: PropTypes.string,
};

function Product(props) {
    const { product, layout = 'vertical' } = props;

    return (
        <Link to={`/product/${product._id}`} className={cx('wrapper', { horizontal: layout !== 'vertical' })}>
            {product.discount !== 0 && <div className={cx('product-discount-tag')}>{'15%'}</div>}
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
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </div>
        </Link>
    );
}

export default Product;
