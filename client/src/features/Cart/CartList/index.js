import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CartList.module.scss';
import CartItem from '../CartItem';

CartList.propTypes = {
    cartItems: PropTypes.array.isRequired,
    allowEdit: PropTypes.bool,
};

const cx = classNames.bind(styles);

function CartList(props) {
    const { cartItems, allowEdit = true } = props;

    const hanldeChange = (value) => {
        console.log(value);
    };

    console.log('cart items', cartItems);

    return (
        <div className={cx('wrapper')}>
            <div className={`grid ${cx('cart-item-list')}`}>
                <div className={`${cx('list-header')} row`}>
                    <div className={`col c-${allowEdit ? 5 : 7}`}>Item</div>
                    <div className="text-middle col c-2">Quantity</div>
                    <div className={`text-end col c-${allowEdit ? 5 : 3}`}>Order value</div>
                </div>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} onQuantityChange={hanldeChange} allowEdit={allowEdit} />
                ))}
            </div>
        </div>
    );
}

export default CartList;
