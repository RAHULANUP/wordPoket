import React from "react";
import "./Landing.css";
function Landing(){
    return(
        <>
            <section className="landing">
                <nav>
                    <h3 className="logo">wordPoket</h3>
                </nav>
                <section className="main">
                    <div>
                        A <span>DICTIONARY</span> THAT IS WITH YOU 
                    </div>
                    <div>
                        ANYWHERE & EVERYWHERE
                    </div>
                    <button>SCROLL DOWN AND GET STARTED</button>
                </section>
                
            </section>
        </>
    )
}

export default Landing;