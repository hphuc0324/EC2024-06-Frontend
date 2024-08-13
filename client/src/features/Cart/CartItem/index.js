import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CartItem.module.scss';
import images from 'assets/images';
import { toVND } from 'utils/currencyConverter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus, faTrash } from '@fortawesome/free-solid-svg-icons';

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    onQuantityChange: PropTypes.func.isRequired,
    allowEdit: PropTypes.bool,
};

const cx = classNames.bind(styles);

function CartItem(props) {
    const { item, onQuantityChange, allowEdit } = props;

    const handleQuantityChange = async (value) => {
        await onQuantityChange(value);
    };

    return (
        <div className={`row ${cx('wrapper')}`}>
            <div className={`${cx('item')} col c-${allowEdit ? 5 : 7}`}>
                <img className={cx('item-image')} src={images.homePanels[0]} />
                <div className={cx('item-info')}>
                    <span className={cx('item-name')}>{item.name || 'peachy cake'}</span>
                    {allowEdit && (
                        <div className={cx('item-action')}>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faCirclePlus} onClick={() => handleQuantityChange(1)} />
                            </span>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faCircleMinus} onClick={() => handleQuantityChange(-1)} />
                            </span>
                            <span className={cx('action-icon')}>
                                <FontAwesomeIcon icon={faTrash} onClick={() => handleQuantityChange(-1)} />
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className="text-middle col c-2">{item.quantity || 1}</div>
            <div className={`text-end col c-${allowEdit ? 5 : 3}`}>{toVND(120000)}</div>
        </div>
    );
}

export default CartItem;
