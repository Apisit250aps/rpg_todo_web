import React, { useState } from "react"
import apiClient from "../../../configs/axios"

function CreateCharacterForm() {
  const [name, setName] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name) {
      await apiClient({
        method: "post",
        url: "/character/create",
        data: {
          name
        }
      }).then((response) => {
        if (response.status === 201) {
          alert("Character create success!")
        }
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            type="text"
            className="grow"
            placeholder="Daisy"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-primary mt-3" >Create</button>
      </form>
    </>
  )
}

export default CreateCharacterForm
