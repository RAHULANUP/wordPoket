import {useState,useEffect} from "react";
import "./Navbar.css";
import {getAuth,signOut,onAuthStateChanged} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {app} from "../../firebase.js"
function Navbar() {
  const auth = getAuth(app);
  const [loggedIn,setLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setLoggedIn(true);
      }
      else{
        setLoggedIn(false);
      }
    })
    return ()=>unsubscribe()
  },[loggedIn])
  const handleLogOut = () =>{
    signOut(auth)
    .then(()=>{
      console.log("USER LOGGED Out")
      navigate("/")
    }
    )
    .catch(err=>console.log(err));
  }
  return (
    <nav>
        <h3 className="logo">wordPoket</h3>
        <h1></h1>
        {
          loggedIn && <button className="button" onClick={handleLogOut}>LogOut</button>
        }
    </nav>
  )
}

export default Navbar