import { useState } from "react";

export function Task(params){
    const {text} = params.data
    const style = {
        borderLeftColor: "#ff0000",
    }

    const [taskText, setTaskText] = useState(text);
    const [inputText, setInputText] = useState(text);
    const [editForm, setEditForm] = useState(false);
    const [taskDone, setTaskDone] = useState(false);
    const [taskVisibility, setTaskVisibility] = useState(true);
    function editFormVisible(){
        setEditForm(true)
    }
    function editFormHidden(){
        setEditForm(false)
    }

    function handleUpdate(e){
        e.preventDefault();
        const text = inputText.trim();
        if(text.length >0){
            setTaskText(text);
            setInputText(text);
            setEditForm(prev => false);
        }
    }

    if(!taskVisibility){
        return <></>;
    }
    return(
        <article className="item" data-state={taskDone?'done':''} style={style}>
            <div className="date">2024-07-07 14:12:32</div>
            <div className="text">{taskText}</div>
            <div className="done">Done</div>
            <form onSubmit={handleUpdate} className={editForm? '':'hidden'}>
                <input onChange={e=>setInputText(e.target.value)} type="text" value={inputText} />
                <div className="btnList">
                    <button className="update" type="submit">Update</button>
                    <button className="clear" type="reset" onClick={()=>setInputText('')} >Clear</button>
                    <button className="clear" type="reset" onClick={()=>setInputText(taskText)} >Reset</button>
                    <button className="cancel" type="button" onClick={editFormHidden} >Cancel</button>
                </div>
            </form>
            <div className="action">
                {!taskDone &&
                    <>
                        <button className="" onClick={()=>setTaskDone(prev => true)} >Done</button>
                        <div className="diviter">|</div>
                        <button className="edit" onClick={editFormVisible}>Edit</button>
                    </>
                }
                <button className="delete" onClick={()=>setTaskVisibility(prev =>false)}>Delete</button>
            </div>
        </article>
       
    );
}