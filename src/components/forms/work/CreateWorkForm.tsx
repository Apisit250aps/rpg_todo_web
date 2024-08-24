import { useState } from "react"
import { FC } from "react"
import apiClient from "../../../configs/axios"
import { useParams } from "react-router-dom"
import { handleCloseModal } from "../../modal"
import Swal from "sweetalert2"
const CreateWorkForm: FC<{ onCreated: (data: any) => void }> = ({
  onCreated
}) => {
  const [name, setName] = useState<string>()
  const [description, setDesc] = useState<string>()
  const [start_date, setStart] = useState<string>()
  const [due_date, setDue] = useState<string>()
  const [status, setStatus] = useState<string>()

  const { characterId } = useParams()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await apiClient({
      method: "post",
      url: `work/create/${characterId}`,
      data: {
        name,
        description,
        start_date,
        due_date,
        status
      }
    }).then((response) => {
      if (response.status === 201) {
        
        handleCloseModal("create_work_modal")
        Swal.fire({
          title: "Work Create",
          icon: "success"
        })
        onCreated(response.data)
      }
    })
  }

  return (
    <>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Name
          <input
            type="text"
            className="grow"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <textarea
          className="textarea textarea-bordered mb-3"
          placeholder="Description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Start
          <input
            type="date"
            className="grow"
            value={start_date}
            onChange={(e) => setStart(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 mb-3">
          Due
          <input
            type="date"
            className="grow"
            value={due_date}
            onChange={(e) => setDue(e.target.value)}
          />
        </label>
        <select
          className="select select-bordered"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value={"todo"}>Todo</option>
          <option value={"inprogress"}>Inprogress</option>
          <option value={"done"}>Done</option>
        </select>
        <button type="submit" className="btn btn-primary mt-3">
          Create
        </button>
      </form>
    </>
  )
}

export default CreateWorkForm
