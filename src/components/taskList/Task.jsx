import { useState } from "react";

export function Task(){
    const [count,setCount]= useState(0);
    const style = {
        borderLeftColor: "#ff0000",
    }
    function updateCount(){
        setCount(count + 1)
    }
    function updateCount5(){
        setCount(count + 5)
    }
    function updateCount10(){
        setCount(count + 10)
    }
    return(
        <article className="item" data-state="" style={style}>
            <div className="text">todoText ({count})</div>
            <div className="date">2024-07-07 14:12:32</div>
            <div className="done">Done</div>
            <form className="hidden">
                <input type="text" value="todoText" />
                <button className="update" type="submit">Update</button>
                <button className="cancel" type="button">Cancel</button>
            </form>
            <div className="action">
                <button className="" onClick={updateCount}>Done</button>
                <div className="diviter">|</div>
                <button className="edit" onClick={updateCount5}>Edit</button>
                <button className="delete" onClick={updateCount10}>Delete</button>
            </div>
        </article>
       
    );
}