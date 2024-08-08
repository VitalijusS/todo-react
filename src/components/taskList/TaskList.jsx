import { Task } from "./Task";

export function TaskList(params){
    
    if(params.data.length === 0){
        return (
        <div className="list empty">
          Empty
        </div>
        )
    }else{
        return (
            <div className="list">
                {params.data.map((item,index)=><Task data={item} key={index}/>)}
            </div>
        )
    }
}