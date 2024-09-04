import classNames from 'classnames/bind';

import CartList from 'features/Cart/CartList';

import styles from './Cart.module.scss';
import { toVND } from 'utils/currencyConverter';
import Button from 'components/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from 'features/Cart/cartSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const cx = classNames.bind(styles);

function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const handleFetchCart = async () => {
            try {
                const action = await dispatch(getCart());
                const resultAction = unwrapResult(action);
            } catch (error) {
                console.log(error);
            }
        };

        handleFetchCart();
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
                    <Box display="flex" justifyContent="flex-end">
                        <Button classNames={cx('payment-btn')} callback={() => navigate('/payment')}>
                            To payment
                        </Button>
                    </Box>
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
