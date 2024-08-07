import { FormCreateTask } from "./components/form/Form"
import { ListActions } from "./components/listActions/ListActions"
import { TaskList } from "./components/taskList/TaskList"


function App() {
  return (
    <main>
      <h1>Todo</h1>
      <FormCreateTask />
      <ListActions />  
      <TaskList />

    </main>
  )
}

export default App
