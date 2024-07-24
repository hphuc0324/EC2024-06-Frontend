import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ProductDetails.module.scss';
import images from 'assets/images';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import { toVND } from 'utils/currencyConverter';

const cx = classNames.bind(styles);

ProductDetails.propTypes = {
    product: PropTypes.object.isRequired,
};

function ProductDetails(props) {
    const { _id } = useParams();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('product-section')}>
                <img className={cx('product-cover')} src={images.homePanles[0]} />
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
                                <p>
                                    <span className={cx('product-old-price')}>{toVND(250000)}</span>
                                    <span className={cx('product-old-price')}>{toVND(250000)}</span>
                                    <span className={cx('product-old-price')}>{toVND(250000)}</span>
                                    <span className={cx('product-old-price')}>{toVND(250000)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('review-section')}></div>
        </div>
    );
}

export default ProductDetails;
