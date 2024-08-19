import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';

export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    try {
        const res = await authApi.login(payload);

        return null;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            return rejectWithValue('Wrong email or password');
        } else {
            return rejectWithValue('Something went wrong. Please try again.');
        }
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        current: null,
        settings: {},
        error: null,
    },
    reducers: {},
    extraReducers: (builders) => {
        builders.addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
            state.error = null;
        });

        builders.addCase(login.rejected, (state, action) => {
            state.current = null;
            state.error = action.payload;
        });
    },
});

const { actions, reducer } = userSlice;
export default reducer;
