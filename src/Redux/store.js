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
export const server = 'http://localhost:4000/api/v1';