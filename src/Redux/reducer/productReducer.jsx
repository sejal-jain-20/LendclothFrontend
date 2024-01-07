import {createReducer} from '@reduxjs/toolkit';

const initalState = {

    loading : false,
    products: []

}

export const productReducer = createReducer(
   initalState, 
    {
        getuserproductRequest : state =>{
            state.loading = true;
        },
        getuserproductSuccess : (state , action)=>{
            state.loading = false ;
            state.products = action.payload ;
        },
        getuserproductFail : (state , action )=>{
            state.loading=false;
            state.error = action.payload
        },
        createproductRequest:state =>{
            state.loading = true;
        },
        createproductSuccess:(state,action) =>{
            state.loading= false;
            state.isAuthenticated = true;
            state.products = action.payload.products;
            state.message = action.payload.message;
        },
        createproductFail:(state,action)=>{
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        getproductcardRequest : state =>{
            state.loading = true;
        },
        getproductcardSuccess : (state , action)=>{
            state.loading = false ;
            state.products = action.payload ;
        },
        getproductcardFail : (state , action )=>{
            state.loading=false;
            state.error = action.payload
        },

        getselectedprodRequest : state =>{
            state.loading = true;
        },
        getselectedprodSuccess : (state , action)=>{
            state.loading = false ;
            state.product = action.payload ;
        },
        getselectedprodFail : (state , action )=>{
            state.loading=false;
            state.error = action.payload
        },

        borrowRequest : state =>{
            state.loading = true;
        },
        borrowSuccess : (state , action)=>{
            state.loading = false ;
            state.products = action.payload ;
        },
        borrowFail : (state , action )=>{
            state.loading=false;
            state.error = action.payload
        },

        returnproductRequest: state=>{
            state.returning =true
        },
        returnproductSuccess:(state , action)=>{
            state.loading = false ;
            state.products = action.payload ;
        },
        returnproductFail: (state , action)=>{
            state.loading=false;
            state.error = action.payload
        },
        deleteproductRequest: state=>{
            state.returning =true
        },
        deleteproductSuccess:(state , action)=>{
            state.loading = false ;
            state.products = action.payload ;
        },
        deleteproductFail: (state , action)=>{
            state.loading=false;
            state.error = action.payload
        },
        
        updateproductRequest : state =>{
            state.loading = true;
        },
        updateproductSuccess : (state , action)=>{
            state.loading = false ;
            state.products = action.payload.products ;
        },
        updateproductFail : (state , action )=>{
            state.loading=false;
            state.error = action.payload
        },


     
    }
)