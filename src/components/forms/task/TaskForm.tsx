import { FC } from "react"

const TaskForm: FC = () => {
  return (
    <>
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full  mb-3"
        />
        <textarea
          className="textarea textarea-bordered w-full  mb-3"
          placeholder="Bio"
        ></textarea>
        <select className="select select-bordered w-full mb-3">
          <option value={1}>Easy</option>
          <option value={2}>Medium</option>
          <option value={3}>Hard</option>
        </select>
        <label className="input input-bordered mb-3 flex items-center gap-2">
          Start
          <input type="date" className="grow " />
        </label>
        <label className="input input-bordered mb-3 flex items-center gap-2">
          Due
          <input type="date" className="grow " />
        </label>
        <button className="btn">Create</button>
      </form>
    </>
  )
}

export default TaskForm
