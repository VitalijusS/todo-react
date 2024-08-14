import { Task } from "./Task";

export function TaskList(params) {
    const { updateTaskColor, updateTaskState, updateTaskText, deleteTask, data } = params;

    if (data === 0) {
        return (
            <div className="list empty">
                Empty
            </div>
        )
    } else {
        return (
            <div className="list">
                {data.map((item) => <Task data={item}
                    updateTaskColor={updateTaskColor}
                    updateTaskState={updateTaskState}
                    updateTaskText={updateTaskText}
                    deleteTask={deleteTask}
                    key={item.id} />)}
            </div>
        )
    }
}