import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import { useState } from "react";
import LoginPage from './components/LoginPage';
import { auth } from './firebase';

function App() {
  const [user,setUser]=useState(JSON.parse(localStorage.getItem("user")));
  console.log(user);

  const signOut = () =>{
    auth
    .signOut()
    .then(()=>{
      setUser(null)
      localStorage.removeItem('user')
    })
    .catch((err)=>alert(err.message));
  }
  return (
    <Router>
      <div className="app">
        {user?(
        <Routes>
          <Route path="/chatpage" element={<ChatPage currentUser={user} signOut={signOut}/>}/>
          <Route path="/" element={<Home currentUser={user} signOut={signOut}/>}/>
        </Routes>
        ): (
        <LoginPage setUser={setUser}/>
        )}

    </div>
    </Router>
  );
}

export default App;
