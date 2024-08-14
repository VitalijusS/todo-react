import { useEffect, useState } from "react"
import { FormCreateTask } from "./components/form/FormCreateTask"
import { ListActions } from "./components/listActions/ListActions"
import { TaskList } from "./components/taskList/TaskList"



function App() {
  const storageDataKey = 'todo-data';
  const storageIdKey = 'todo-last-id';
  const [taskList, setTaskList] = useState(readLocalData);
  const [id, setId] = useState(readLocalId);


  useEffect(() => {
    localStorage.setItem(storageDataKey, JSON.stringify(taskList));

  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(storageIdKey, JSON.stringify(id));

  }, [id]);

  function readLocalData() {
    const data = localStorage.getItem(storageDataKey);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }
  function readLocalId() {
    const data = localStorage.getItem(storageIdKey);
    if (data) {
      return JSON.parse(data);
    }
    return 0;
  }

  function addTask(taskText, taskColor) {
    setTaskList((prev) => [...prev,
    {
      id: id + 1,
      text: taskText,
      color: taskColor,
      stat: 'todo',
    },
    ]);
    setId(prev => prev + 1)

  }

  function updateTaskColor(id, newColor) {
    setTaskList(prev => prev.map(task => ({ ...task, color: task.id === id ? newColor : task.color })))

  }

  function updateTaskText(id, newText) {
    setTaskList(prev => prev.map(task => ({ ...task, text: task.id === id ? newText : task.text })))

  }

  function updateTaskState(id) {
    setTaskList(prev => prev.map(task => ({ ...task, state: task.id === id ? 'done' : task.state })))

  }

  function deleteTask(id) {
    setTaskList((prev) => prev.filter(item => item.id !== id));

  }
  window.addEventListener('keyup', () => {
    console.log('a');

  })
  return (
    <main>
      <h1>Todo</h1>
      <div>
        <h2>Total tasks: {taskList.length}</h2>
        <h2>Total tasks left: {taskList.length}</h2>
        <h2>Total tasks done: -</h2>
        <h2>Total tasks deleted: -</h2>
      </div>
      <FormCreateTask addTaskCallback={addTask} />
      <ListActions />
      <TaskList data={taskList}
        updateTaskColor={updateTaskColor}
        updateTaskState={updateTaskState}
        updateTaskText={updateTaskText}
        deleteTask={deleteTask} />

    </main>
  )
}

export default App
