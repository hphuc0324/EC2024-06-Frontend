import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CartItem.module.scss';
import { toVND } from 'utils/currencyConverter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeProduct } from '../cartSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { showToast } from 'components/ToastMessage';

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    allowEdit: PropTypes.bool,
};

const cx = classNames.bind(styles);

function CartItem(props) {
    const { item, onQuantityChange, allowEdit } = props;
    const dispatch = useDispatch();

    const handleQuantityChange = async (value) => {
        await onQuantityChange(value);
    };

    const handleIncreaseQuantity = async () => {
        try {
            const action = await dispatch(increaseQuantity(item.productId));

            const resultAction = unwrapResult(action);
        } catch (error) {
            showToast('Error', error);
        }
    };

    const handleDecreaseQuantity = async () => {
        try {
            const action = await dispatch(decreaseQuantity(item.productId));

            const resultAction = unwrapResult(action);
        } catch (error) {
            showToast('Error', error);
        }
    };

    const handleRemoveProduct = async () => {
        try {
            const action = await dispatch(removeProduct(item.productId));

            const resultAction = unwrapResult(action);
        } catch (error) {
            showToast('Error', error);
        }
    };

    return (
        <div className={`row ${cx('wrapper')}`}>
            <div className={`${cx('item')} col c-${allowEdit ? 5 : 7}`}>
                <img className={cx('item-image')} src={item.image} />
                <div className={cx('item-info')}>
                    <span className={cx('item-name')}>{item.name || 'peachy cake'}</span>
                    {allowEdit && (
                        <div className={cx('item-action')}>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={handleIncreaseQuantity} />
                            </span>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={handleDecreaseQuantity} />
                            </span>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faTrash} onClick={handleRemoveProduct} />
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-middle col c-2">{item.quantity || 1}</div>
            <div className={`text-end col c-${allowEdit ? 5 : 3}`}>{toVND(item.sell_price)}</div>
        </div>
    );
}

export default CartItem;
