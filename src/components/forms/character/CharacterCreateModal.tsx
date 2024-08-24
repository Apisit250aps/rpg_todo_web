import React, { FC, useState } from "react"
import apiClient from "../../../configs/axios"
import { handleCloseModal } from "../../modal"
import Swal from "sweetalert2";

const CharacterCreateModal: FC = () => {
  const [name, setName] = useState<string>("")
  const [className, setClassName] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name) {
      await apiClient({
        method: "post",
        url: "/character/create",
        data: {
          name,
          className
        }
      }).then((response) => {
        if (response.status === 201) {
          handleCloseModal("create_character_form_modal")
          Swal.fire({
            title: "Success!",
            text: "Character created!",
            icon: "success"
          })
          location.reload()
        }
      })
    }
  }
  return (
    <>
      <dialog id={"create_character_form_modal"} className={`modal`}>
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-l">Create Character!</h3>
          <div className="divider"></div>
          <form onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Name
              <input
                type="text"
                className="grow"
                placeholder="Daisy"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-3">
              Class
              <input
                type="text"
                className="grow"
                placeholder="Student"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </label>
            <button type="submit" className="btn btn-primary mt-3">
              Create
            </button>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default CharacterCreateModal
