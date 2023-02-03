import React, { useState, useReducer } from "react";
import "./Style.css";

const UseReducer = () => {
    const [mynum, setnum] = useState(0);
    const reducer=(state,action)=>{
        if(action.type==="INCR"){
            state=state+1;
        }
        if(state>0 && action.type==="DECR"){
            state=state-1;
        }
        return state;
    }

   const initialdata=0;
   const [state,dispatch]=useReducer(reducer,initialdata);
    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div className="button2" onClick={()=>dispatch ({type:"INCR"})}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>

            </div>
        </>
    );
};

export default UseReducer;