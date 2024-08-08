import { useState } from "react"
import { FormCreateTask } from "./components/form/Form"
import { ListActions } from "./components/listActions/ListActions"
import { TaskList } from "./components/taskList/TaskList"
import { tasks } from "./data/tasks"



function App() {
  const[taskList, setTaskList] = useState(tasks);
  const [count, setCount] = useState(0);

  function handleTaskListClick(){
    setTaskList((prev)=>[...prev, {text:'test'}])
  }

  return (
    <main>
      <h1 onClick={handleTaskListClick}>Todo</h1>
      <div>
        <h2>Total tasks: {taskList.length}</h2>
        <h2>Total tasks left: {taskList.length}</h2>
        <h2>Total tasks done: -</h2>
        <h2 onClick={()=>setCount(num=>num+1)}>Total tasks deleted: {count}</h2>
      </div>
      <FormCreateTask />
      <ListActions />  
      <TaskList data={taskList}/>

    </main>
  )
}

export default App
