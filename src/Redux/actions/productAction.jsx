import { server } from '../store';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

export const getUserClothes = () => async dispatch =>{
    try {
        dispatch({type:"getuserproductRequest"});
        // console.log("product");
        const {data} = await axios.get(`${server}/userproducts`,{
            withCredentials : true,
        });
        // console.log("product", data);
        dispatch({ type: 'getuserproductSuccess', payload: data.data });
        
    }
    catch(error){
        dispatch({
            type: 'getuserproductFail',
            payload: error.response?.message,
          });
    }
}

export const createproduct =(formData)=> async dispatch =>{
    try {
      dispatch({type : 'createproductRequest'});
  
      const {data} = await axios.post(
          `${server}/createproduct`, 
          formData,
          {
              headers:{
                  'Content-Type':'multipart/form-data',
              },
              withCredentials:true,
          }
      );
      console.log("first")
      dispatch({type : 'createproductSuccess' , payload : data});
      toast.success("Product Created")
    } catch (error) {
      dispatch({type : 'createproductFail' , payload : error.response.data.message});
      toast.error("Failed")
       
    }
  };

  export const getproductcards = () => async dispatch =>{
    try {
        dispatch({type:"getproductcardRequest"});
        // console.log("product");
        const {data} = await axios.get(`${server}/product`,{
            withCredentials : true,
        });
        // console.log("product", data);
        dispatch({ type: 'getproductcardSuccess', payload: data.product });
        
    }
    catch(error){
        dispatch({
            type: 'getproductcardFail',
            payload: error.response?.message,
          });
    }

}

export const getselectedproduct = (id) => async dispatch =>{
    try {
        dispatch({type:"getselectedprodRequest"});
        // console.log("selectedproduct");
        const {data} = await axios.get(`${server}/product/${id}`,{
            withCredentials : true,
        });
        // console.log("product", data);
        dispatch({ type: 'getselectedprodSuccess', payload: data });
        
    }
    catch(error){
        dispatch({
            type: 'getselectedprodFail',
            payload: error.response?.message,
          });
    }
    
}

export const borrowproduct = (id) => async dispatch =>{
    try {
        dispatch({type:"borrowRequest"});
        // console.log("borrowproduct");
        const {data} = await axios.put(`${server}/borrow/${id}`,{},{
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials : true,
        });
        
        dispatch({ type: 'borrowSuccess', payload: data });
        toast.success("borrow Successfully")
        
        
    }
    catch(error){
        // console.log(error)
        dispatch({
            type: 'borrowFail',
            payload: error.response?.message,
            
          });
          toast.error("you are lender of the product")
    }
    
}

export const returnproduct = (id) => async dispatch =>{
    try {
        dispatch({type:"returnproductRequest"});
        // console.log("borrowproduct");
        const {data} = await axios.delete(`${server}/borrow/${id}`,{
            withCredentials : true,
        });
        // console.log("product", data);
        dispatch({ type: 'returnproductSuccess', payload: data });
        toast.success("return product Successfully")
        
    }
    catch(error){
        // console.log(error)
        dispatch({
            type: 'returnproductFail',
            payload: error.response?.message,
            
          });
    }
    
}
export const deleteproduct = (id) => async dispatch =>{
    try {
        dispatch({type:"deleteproductRequest"});
        // console.log("borrowproduct");
        const {data} = await axios.delete(`${server}/product/${id}`,{
            withCredentials : true,
        });
        // console.log("product", data);
        dispatch({ type: 'deleteproductSuccess', payload: data });
        toast.success("delete product Successfully")
        
    }
    catch(error){
        // console.log(error)
        dispatch({
            type: 'deleteproductFail',
            payload: error.response?.message,
            
          });
    }
    
}
export const updateProduct=(id, { actualprice, finalprice })=>async dispatch=>{
  try {
    dispatch({type:"updateproductRequest"});
        console.log("updateproduct");
        const {data} = await axios.put(`${server}/product/${id}`,{actualprice,finalprice},{
            headers:{
                'Content-Type':'application/json',
            },
            withCredentials : true,

        });
        console.log("product", data);
        dispatch({ type: 'updateproductSuccess', payload: data });
        
    
  } 
  catch (error) {
    dispatch({
        type: 'updateproductFail',
        payload: error.response?.message,
        
      });
  }
}
