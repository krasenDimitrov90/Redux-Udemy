import { createSlice, configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';



const initialAuthState = { isLoggedIn: false };

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    }
});

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authSlice.reducer,
    }
});

export const authActions = authSlice.actions;

export default store; 