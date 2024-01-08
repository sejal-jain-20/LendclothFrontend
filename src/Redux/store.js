import {configureStore} from '@reduxjs/toolkit';
import { userReducer } from './reducer/userReducer';
import { productReducer } from './reducer/productReducer';


const store = configureStore({
    reducer: {
        user: userReducer,
        product : productReducer
    }
});

export default store;
export const server = 'https://d5077901-d6d1-4a70-93c7-3a03675af7a7-00-1q2ahegn3rofl.pike.replit.dev/api/v1';