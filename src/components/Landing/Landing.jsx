import "./Landing.css";
import googleAuthLogo from "../../assets/googleAuthLogo.png";

import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import {app} from "../../firebase.js";

import { useNavigate } from "react-router-dom";

function Landing(){
    const auth = getAuth(app)
    const authProvider = new GoogleAuthProvider()
    const navigate = useNavigate();

    const handleSignUp = () =>{
        signInWithPopup(auth,authProvider)
        .then((result)=>{
            console.log(result.user);
            navigate("/words");
        })
        .catch(err=>{console.log(err)})
    }
    return(
        <>
            <section className="landing">

                <section className="main">
                    <div>
                        <span>Know</span> Your Words
                    </div> 
                </section>
                <div className="button" onClick={handleSignUp}><img src={googleAuthLogo} alt="Google Auth Logo"/><p>Sign UP</p></div>
            </section>
        </>
    )
}

export default Landing;