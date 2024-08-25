const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const { default: cartApi } = require('api/cartApi');

const getCart = createAsyncThunk('cart/getCart', async (payload, { rejectWithValue }) => {
    try {
        const res = await cartApi.getCart();

        console.log(res);

        return res.data.metadata;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            rejectWithValue('Cart not found');
        } else {
            rejectWithValue('Something went wrong! Please try again later.');
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
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice;
        });
    },
});
