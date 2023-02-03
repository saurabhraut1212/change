import React, { useState,useEffect } from "react";
import "./Style.css";

const UseState = () => {
    const [mynum, setnum] = useState(0);

    useEffect(()=>{
        document.title=`Chats(${mynum})`     //This code increase the chat at title at every time we press the button 
    })
    return (
        <>
            <div className="center_div">
                <p>{mynum}</p>
                <div className="button2" onClick={() => setnum(mynum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
               
               
            </div>
        </>
    );
};

export default UseState;