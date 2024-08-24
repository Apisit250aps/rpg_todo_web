import { FC, useState } from "react"
import { useParams } from "react-router-dom"

interface WorkCardProp {
  id?: string
  name?: string
  desc?: string
  start?: string
  due?: string
  status?: string
  task?: any[]
}

const TaskList: FC<{
  name: string
  difficulty: number
  status: string
  id: string
}> = ({ name, difficulty, status, id }) => {
  return (
    <>
      <tr className="mt-2">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td id={id}>{name}</td>
        <td>{status}</td>
        <td>{difficulty}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </>
  )
}

const WorkCard: FC<WorkCardProp> = ({ id, name, start, due, status, task }) => {
  const { characterId } = useParams()
  const [showContent, setShow] = useState<boolean>(false)

  return (
    <>
      <div id={id} className="card w-full bg-white mt-3">
        <div className="card-body p-3">
          <h2 className="card-title flex flex-col">
            <div className="flex flex-row justify-between w-full">
              <a href={`/${characterId}/${id}`}>
                <small className="">{name}</small>
              </a>
              <div className="">
                <div className="badge badge-neutral text-white">{status}</div>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShow(!showContent)}
                >
                  <i className="bx bx-task"></i>
                </button>
              </div>
            </div>
            <div className="">
              {start ? (
                <div className="badge badge-primary">{start}</div>
              ) : (
                <></>
              )}
              {due ? <div className="badge badge-primary">{due}</div> : <></>}
            </div>
            <progress
              className="progress progress-error w-full"
              value="100"
              max="100"
            ></progress>
          </h2>
          <div className="collapse bg-base-200">
            <input
              type="checkbox"
              checked={showContent}
              hidden
              onChange={() => 0}
            />
            <div className="collapse-content">
              <table className="table">
                {task?.map((t, index) => (
                  <TaskList
                    key={index}
                    name={t.name}
                    difficulty={t.difficulty}
                    status={t.status}
                    id={t.id}
                  />
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard
