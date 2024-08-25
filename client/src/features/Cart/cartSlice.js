import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartApi from 'api/cartApi';

export const getCart = createAsyncThunk('cart/getCart', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.getCart();

        console.log(res);

        return res.data.metadata;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message);
        } else {
            return rejectWithValue('Something went wrong! Please try again later.');
        }
    }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.addToCart(payload);

        return res.data.metadata;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message);
        }
    }
});

export const increaseQuantity = createAsyncThunk('cart/increaseQuantity', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.increaseQuantity(payload);

        return res.data;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message);
        }
    }
});

export const decreaseQuantity = createAsyncThunk('cart/decreaseQuantity', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.decreaseQuantity(payload);

        return res.data.metadata;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message);
        }
    }
});

export const removeProduct = createAsyncThunk('cart/removeProduct', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.removeProduct(payload);

        return res.data.metadata;
    } catch (error) {
        if (error.response) {
            return rejectWithValue(error.response.data.message);
        }
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
    },
    extraReducers: (builder) => {
        builder.addCase(getCart.fulfilled, (state, action) => {
            state.items = action.payload.cart_products;
            state.totalPrice = action.payload.totalPrice;
        });
        builder.addCase(getCart.rejected, (state, action) => {
            state.items = [];
            state.totalPrice = 0;
        });

        builder.addCase(addToCart.fulfilled, (state, action) => {
            state.items = action.payload.cart_products;
        });

        builder.addCase(increaseQuantity.fulfilled, (state, action) => {
            state.items = action.payload.cart_products;
        });

        builder.addCase(decreaseQuantity.fulfilled, (state, action) => {
            state.items = action.payload.cart_products;
        });

        builder.addCase(removeProduct.fulfilled, (state, action) => {
            state.items = action.payload.cart_products;
        });
    },
});

const { reducer } = cartSlice;
export default reducer;
