import React,{ useState } from "react";
import "./Body.css";

function Body(){
    const [word,setWord]=useState("");
    const [meaning,setMeaning] = useState([]);
    
    const inpt = document.querySelector(".input");
    function handleOnChange(event){
        setWord(event.target.value);
    }
    async function getData(word){
        if(word === "") setMeaning(["Please enter anything..."]);
        else{
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
            const data = await response.json();
            console.log(data[0]);
            const definition = data[0].meanings[0].definitions.map((def)=>def.definition)
            setMeaning(definition);
            console.log(meaning);
        }
    }   

    function handleOnClick(){
        if(inpt.value==null){
            setMeaning(["Couldn't find the word you are looking for..."]);
        }else{
            getData(inpt.value).catch(()=>{
            console.log("error")
            setMeaning(["Couldn't find the word you are looking for..."]);
        }
        );
    }
    }

    return(
        <>
            <div className="main_container">
                <div className="container-main">
                    <input onChange={handleOnChange} className="input" type="text" value={word} placeholder="ENTER A WORD" />
                    <button className="search-button" onClick={handleOnClick}> Search </button>
                </div>
                <div className="container">
                    <div className="card">

                        <div className="output">
                            {
                                (meaning.length>0) ? 
                                (
                                    meaning?.map((mn,idx)=>{
                                        return(
                                            <div>
                                            { mn!=="Please enter anything..." ?
                                            (<li key={idx}>
                                                {mn}
                                            </li>):(
                                                <p>{mn}</p>
                                            )
                                            }
                                            </div>
                                        )
                                    })
                                ):
                                (
                                    <div>
                                        Please enter anything...
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Body;