import { useEffect, useState } from "react"
import { FormCreateTask } from "./components/form/FormCreateTask"
import { ListActions } from "./components/listActions/ListActions"
import { TaskList } from "./components/taskList/TaskList"



function App() {
  const storageDataKey = 'todo-data';
  const storageIdKey = 'todo-last-id';
  const storageSortingKey = 'todo-sorting';
  const [taskList, setTaskList] = useState(readLocalData);
  const [id, setId] = useState(readLocalId);
  const [sortingAlgo, setSortingAlgo] = useState(readLocalSortingAlgo);

  useEffect(() => {
    localStorage.setItem(storageDataKey, JSON.stringify(taskList));

  }, [taskList]);

  useEffect(() => {
    localStorage.setItem(storageIdKey, JSON.stringify(id));

  }, [id]);

  useEffect(() => {
    localStorage.setItem(storageSortingKey, JSON.stringify(sortingAlgo));

  }, [sortingAlgo]);

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
  function readLocalSortingAlgo() {
    const data = localStorage.getItem(storageSortingKey);
    if (data) {
      return JSON.parse(data);
    }
    return 'timeAsc';
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

  function sortData() {
    const algorithmes = {
      timeAsc: (a, b) => a.id - b.id,
      timeDes: (a, b) => b.id - a.id,
      colorAsc: (a, b) => a.color < b.color ? -1 : a.color === b.color ? 0 : 1,
      colorDes: (a, b) => b.color < a.color ? -1 : b.color === a.color ? 0 : 1,
      titleAsc: (a, b) => a.text < b.text ? -1 : a.text === b.text ? 0 : 1,
      titleDes: (a, b) => b.text < a.text ? -1 : b.text === a.text ? 0 : 1,
    }

    return sortingAlgo in algorithmes ? taskList.sort(algorithmes[sortingAlgo]) : taskList;
  }

  function updateSorting(newAlgoName) {
    setSortingAlgo(newAlgoName)
  }

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
      <ListActions updateSorting={updateSorting} sortingAlgo={sortingAlgo} />
      <TaskList data={sortData()}
        updateTaskColor={updateTaskColor}
        updateTaskState={updateTaskState}
        updateTaskText={updateTaskText}
        deleteTask={deleteTask} />

    </main>
  )
}

export default App
