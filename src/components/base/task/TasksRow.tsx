import { FC, useEffect, useState } from "react"
import apiClient from "../../../configs/axios"
interface Task {
  _id?: string
  name?: string
  isDone: boolean
  start_date?: string
  due_date?: string
  description: string
}
const TasksRow: FC<{ task: Task; onChange: (data: any) => void }> = ({
  task,
  onChange
}) => {
  const [done, setDone] = useState<boolean>()
  useEffect(() => {
   
  }, [done])

  const changeDone = async (isDone: boolean) => {
    await apiClient({
      method: "put",
      url: `tasks/update/${task._id}`,
      data: {
        isDone
      }
    }).then((response) => onChange(response))
  }
  return (
    <>
      <tr key={task._id} id={task._id} className="hover">
        <th>
          <label>
            <input
              type="checkbox"
              className="checkbox"
              checked={task.isDone}
              onChange={(e) => changeDone(e.target.checked)}
            />
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
          {task.due_date ? (
            <span className="badge badge-ghost badge-sm">{task.due_date}</span>
          ) : (
            <></>
          )}
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  )
}

export default TasksRow
