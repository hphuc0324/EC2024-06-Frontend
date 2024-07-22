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
        <Link className={cx('wrapper', { horizontal: layout !== 'vertical' })}>
            {product.discount !== 0 && <div className={cx('product-discount-tag')}>{'15%'}</div>}
            <img src={images.contactPanel} className={cx('product-cover')} />
            <div className={cx('product-info', { horizontal: layout !== 'vertical' })}>
                <div className={cx('product-detail')}>
                    <span className={cx('product-name')}>Daisy Love Cake</span>
                    {layout !== 'vertical' && (
                        <span className={cx('product-description')}>
                            Daisy Love Cake" features moist vanilla sponge infused with fresh daisies.{' '}
                        </span>
                    )}
                    <div className={cx('product-prices')}>
                        <span className={cx('product-new-price')}>{toVND(decreaseByPercent(300000, 10))}</span>
                        {product.discount !== 0 && <span className={cx('product-old-price')}>({toVND(300000)})</span>}
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
