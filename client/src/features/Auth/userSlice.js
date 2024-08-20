import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from 'api/authApi';

export const login = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    try {
        const res = await authApi.login(payload);
        const user = res.data.metadata.user;
        const tokens = res.data.metadata.tokens;

        localStorage.setItem('user', JSON.stringify(user));
        //Set token to localStorage
        localStorage.setItem('access_token', tokens.accessToken);
        localStorage.setItem('refresh_token', tokens.refreshToken);

        return user;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            return rejectWithValue('Wrong email or password');
        } else {
            return rejectWithValue('Something went wrong. Please try again.');
        }
    }
});

export const signUp = createAsyncThunk('auth/signUp', async (payload, { rejectWithValue }) => {
    try {
        const res = await authApi.signUp(payload);

        return null;
    } catch (error) {
        if (error.response && error.response.status === 403) {
            return rejectWithValue('Email already exists');
        } else {
            return rejectWithValue('Something went wrong. Please try again.');
        }
    }
});

export const logout = createAsyncThunk('auth/logout', async ({ rejectWithValue }) => {
    try {
        const res = await authApi.logout();

        return null;
    } catch (error) {
        return rejectWithValue('Something went wrong. Please try again.');
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

        builders.addCase(signUp.fulfilled, (state, action) => {
            state.current = action.payload;
            state.error = null;
        });

        builders.addCase(signUp.rejected, (state, action) => {
            state.current = null;
            state.error = action.payload;
        });

        builders.addCase(logout.fulfilled, (state, action) => {
            state.current = null;
            state.error = null;
        });

        builders.addCase(logout.rejected, (state, action) => {
            state.current = null;
            state.error = action.payload;
        });
    },
});

const { actions, reducer } = userSlice;
export default reducer;
