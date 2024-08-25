import { configureStore } from '@reduxjs/toolkit';

import useReducer from 'features/Auth/userSlice';
import cartReducer from 'features/Cart/cartSlice';

const rootReducer = {
    user: useReducer,
    cart: cartReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
