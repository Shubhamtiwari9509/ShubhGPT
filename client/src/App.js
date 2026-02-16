import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./frontboard/Home";
import About from "./frontboard/About";
import Login from "./frontboard/Login";
import Signup from "./frontboard/Signup";
import Footer from "./components/Footer";
import Profile from "./Dashboard/Profile";
import Contact from "./frontboard/Contact";
import ProtectRouter from "./frontboard/ProtectRouter";
import ChatPage from "./Dashboard/ChatPage";
import NotFound from "./components/NotFound";
import UpgradePage from './components/UpgradePage';
function App() {
 const [isAuthenticated , setisAuthenticated]=useState(
  !!localStorage.getItem("token"));
  const currentUser = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} setisAuthenticated={setisAuthenticated}/>
      <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login setisAuthenticated={setisAuthenticated} />} />
          <Route path="/signup" element={<Signup setisAuthenticated={setisAuthenticated}/>} />
          <Route path="/chatpage" element={
            <ProtectRouter>
               <ChatPage/>
            </ProtectRouter>}/>
            
          <Route path="/profile" element={
            <ProtectRouter> 
            <Profile/>
            </ProtectRouter>
            }/>

          <Route path="/upgradepage" element={
            <ProtectRouter> 
            <UpgradePage user={currentUser}/>
            </ProtectRouter>
            }/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;