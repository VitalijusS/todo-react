import { useState } from "react";

export function Task(params) {
    const { updateTaskColor, updateTaskState, updateTaskText, deleteTask, data } = params
    const { id, text, color, state } = data;
    const style = {
        borderLeftColor: color ?? '#ff0000',
    }

    const [inputText, setInputText] = useState(text);
    const [editForm, setEditForm] = useState(false);
    const [inputColor, setInputColor] = useState(color);
    function editFormVisible() {
        setEditForm(true)
    }
    function editFormHidden() {
        setEditForm(false)
    }

    function handleUpdate(e) {
        e.preventDefault();
        const text = inputText.trim();
        if (text.length > 0) {
            updateTaskText(id, text);
            updateTaskColor(id, inputColor);
            setEditForm(false);
        }
    }

    function handleReset() {
        setInputColor(color);
        setInputText(text);
    }

    return (
        <article className="item" data-state={state === 'done' ? 'done' : ''} style={style}>
            <div className="date">2024-07-07 14:12:32</div>
            <div className="text">{text}</div>
            <div className="done">Done</div>
            <form onSubmit={handleUpdate} className={editForm ? '' : 'hidden'}>
                <input onChange={e => setInputText(e.target.value)} type="text" value={inputText} />
                <input onChange={e => setInputColor(e.target.value)} type="color" value={inputColor} />
                <div className="btnList">
                    <button className="update" type="submit" onSubmit={handleUpdate}>Update</button>
                    <button className="clear" type="reset" onClick={() => setInputText('')} >Clear</button>
                    <button className="clear" type="reset" onClick={() => handleReset()} >Reset</button>
                    <button className="cancel" type="button" onClick={editFormHidden} >Cancel</button>
                </div>
            </form>
            <div className="action">
                {state !== 'done' &&
                    <>
                        <button className="" onClick={() => updateTaskState(id)} >Done</button>
                        <div className="diviter">|</div>
                        <button className="edit" onClick={editFormVisible}>Edit</button>
                    </>
                }
                <button className="delete" onClick={() => deleteTask(id)} >Delete</button>
            </div>
        </article>

    );
}