import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './CartList.module.scss';
import CartItem from '../CartItem';

CartList.propTypes = {
    cartItems: PropTypes.array.isRequired,
};

const cx = classNames.bind(styles);

function CartList(props) {
    const { cartItems } = props;

    const hanldeChange = (value) => {
        console.log(value);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={`grid ${cx('cart-item-list')}`}>
                <div className={`${cx('list-header')} row`}>
                    <div className="col c-5">Item</div>
                    <div className="text-middle col c-2">Quantity</div>
                    <div className="text-end col c-5">Order value</div>
                </div>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={{}} onQuantityChange={hanldeChange} />
                ))}
            </div>
        </div>
    );
}

export default CartList;
