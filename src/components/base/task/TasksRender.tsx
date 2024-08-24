import { FC } from "react"
interface Task {
  id?: string
  name?: string
  status?: string
  start_date?: string
  due_date?: string
  description: string
}
const TasksRender: FC<{ tasks: Task[] }> = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <tr key={index} id={task.id} className="">
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div>
                <div className="font-bold">{task.name}</div>
                <div className="text-sm opacity-50">{task.start_date}</div>
              </div>
            </div>
          </td>
          <td>
            {task.description}
            <br />
            <span className="badge badge-ghost badge-sm">{task.due_date}</span>
          </td>
          <th>
            <button className="btn btn-ghost btn-xs">details</button>
          </th>
        </tr>
      ))}
    </>
  )
}

export default TasksRender
