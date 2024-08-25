import classNames from 'classnames/bind';

import CartList from 'features/Cart/CartList';

import styles from './Cart.module.scss';
import { toVND } from 'utils/currencyConverter';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import cartApi from 'api/cartApi';

const cx = classNames.bind(styles);

function Cart() {
    const cartItems = [1, 2];
    const [cart, setCart] = useState();

    useEffect(() => {
        const handleFetchCart = async () => {
            try {
                const res = await cartApi.getCart();

                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <span className={cx('page-path')}>
                Home / <b>Shopping Cart</b>
            </span>
            <span className={cx('cart-title')}>Shopping cart</span>

            {cartItems.length > 0 && (
                <div className={cx('cart-items')}>
                    <CartList cartItems={cartItems} />
                    <div className={`row ${cx('sub-info')}`}>
                        <div className="col c-5">
                            We offer complimentary standard shipping. Delivery generally takes 2 to 4 working days from
                            the order confirmation date. Please note that personalisation may add up to 7-10 business
                            days to processing and delivery time.
                        </div>
                        <div className="col c-2"></div>
                        <div className="col c-5 text-end">
                            Sub-total
                            <span className={cx('total-price')}> {toVND(500000)}</span>
                        </div>
                    </div>
                </div>
            )}

            {cartItems.length === 0 && (
                <div className={cx('empty-cart')}>
                    <span>Your cart is empty</span>
                    <Button to="/category" classNames={cx('change-path-btn')}>
                        Continue to shopping
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Cart;
