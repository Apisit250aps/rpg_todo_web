import { FC } from "react"

interface WorkStatProp {
  name?: string
  desc?: string
}

const WorkStat: FC<WorkStatProp> = ({ name, desc }) => {
  let value: object = { "--value": 10, value: 10 }

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
            style={value}
            role="progressbar"
          >
            10
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkStat
