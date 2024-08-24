import { FC } from "react"

interface WorkStatProp {
  name?: string
  desc?: string
}

const WorkStat: FC<WorkStatProp> = ({ name, desc }) => {
  return (
    <>
      <div className="stats w-full shadow mt-3">
        <div className="stat">
          <div className="stat-title">{name}</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">{desc}</div>
        </div>
        <div className="stat">
          <div
            className="radial-progress bg-primary text-primary-content border-primary border-4"
            style={{ "--value": 70 }}
            role="progressbar"
          >
            70%
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkStat
