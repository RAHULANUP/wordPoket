import React,{ useState } from "react";
import "./Body.css";

function Body(){
    const [word,setWord]=useState("");

    const inpt = document.querySelector(".input");
    const out = document.querySelector(".output");

    function handleOnChange(event){
        setWord(event.target.value);
    }
    async function getData(word){
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        console.log(data[0]);
        out.innerHTML = data[0].meanings[0].definitions[0].definition;
    }   

    function handleOnClick(){
        if(inpt.value==null){
            out.innerHTML = 'NO SUCH WORD EXIST'
        }else{
        getData(inpt.value).catch(()=>{
            console.log("error")
            out.innerHTML = 'NO SUCH WORD EXIST';
        }
        );
    }
    }

    return(
        <>
            <div className="container-1">
                <input onChange={handleOnChange} className="input" type="text" value={word} placeholder="ENTER A WORD" />
                <button className="search-button" onClick={handleOnClick}><img className="search-image" src="./images/search.png" alt="search" /></button>
            </div>
            
            <div className="card">
                <h2>meaning :</h2>
                <h1 className="output"></h1>
            </div>
        </>
    )
}
export default Body;