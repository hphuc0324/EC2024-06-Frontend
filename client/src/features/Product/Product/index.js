import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import images from 'assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

Product.propTypes = {
    product: PropTypes.object,
    layout: PropTypes.string,
};

function Product(props) {
    const { product, layout = '' } = props;
    return (
        <div className={cx('wrapper', { horizontal: layout !== 'vertical' })}>
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
                        <span className={cx('product-old-price')}>2500000VND</span>
                    </div>
                </div>
                <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </span>
            </div>
        </div>
    );
}

export default Product;
