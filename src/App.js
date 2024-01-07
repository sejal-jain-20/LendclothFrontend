import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card from "./Components/Card/Card";
import "./App.css";
import SignUp from "./Components/Auth/SignUp";
import Login from "./Components/Auth/Login";
import Restpassword from "./Components/Auth/Restpassword";
import Forgetpassword from "./Components/Auth/Forgetpassword";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Header from "./Components/Layout/Header";
import Home from "./Components/Layout/Home";
import MySpace from "./Components/MySpace/MySpace";
import LendTable from "./Components/MySpace/LendTable";
import BorrowTable from "./Components/MySpace/BorrowTable";
import LendCloth from "./Components/LendCloth/LendCloth";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Redux/actions/userAction";
import { ProtectedRoute } from "protected-route-react";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "./Components/Layout/Loader";
import Footer from "./Components/Layout/Footer";

function App() {
  const { isAuthenticated,message, error, loading ,user} = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
     
      <>
      <Header spacing={"16"} isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Card />} />
        <Route path="/explore/:search" element={<Card />} />
        <Route path="/signup" element={ <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/explore"
            >
             <SignUp />
            </ProtectedRoute>} />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/explore"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/resetpassword" element={<Restpassword />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/product/:id" element={ <ProtectedRoute
              isAuthenticated={isAuthenticated}
            ><ProductDetails user={user} /></ProtectedRoute>} />
        <Route
          path="/myspace"
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated} >
              <MySpace />
            </ProtectedRoute>
           } />
        <Route path="/myspace/lendtable" element={ <ProtectedRoute
              isAuthenticated={isAuthenticated}
            ><LendTable /></ProtectedRoute>} />
        <Route path="/myspace/borrowtable" element={ <ProtectedRoute
              isAuthenticated={isAuthenticated}
            ><BorrowTable /></ProtectedRoute>} />
        <Route path="/lendcloth" element={ <ProtectedRoute
              isAuthenticated={isAuthenticated}
            ><LendCloth /></ProtectedRoute>} />
      </Routes>
      <Footer/>
      <Toaster />
      </>    
    
    </Router>
  );
}

export default App;
