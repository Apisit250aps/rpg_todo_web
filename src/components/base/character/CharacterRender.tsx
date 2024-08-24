import apiClient from "../../../configs/axios"
import { FC, useEffect, useState } from "react"

interface CharacterRowProp {
  name: string
  className: string
  id: string
}

const CharacterRow: FC<CharacterRowProp> = ({ name, className, id }) => {
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">{className}</div>
            </div>
          </div>
        </td>
        <th className="flex flex-row justify-end ">
          <a href={`/${id}`} className="btn btn-ghost">
            <i className="bx bx-md bx-chevron-right"></i>
          </a>
        </th>
      </tr>
    </>
  )
}

const CharacterRender: FC<{ refreshTrigger: any }> = ({ refreshTrigger }) => {
  const [characters, setCharacterData] = useState<any[]>([])

  const fetchData = async () => {
    try {
      const response = await apiClient.get("/user/data")
      if (response.status === 200) {
        setCharacterData(response.data[0].characters || [])
      }
    } catch (error) {
      console.error("Failed to fetch character data:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [refreshTrigger]) // Trigger fetchData when refreshTrigger changes
  return (
    <>
      <div className="overflow-x-auto mt-3 w-full">
        <table className="table bg-white rounded-2xl">
          <tbody>
            {characters.length > 0 ? (
              characters.map((character, index) => (
                <CharacterRow
                  key={index}
                  name={character.name}
                  className={character.className}
                  id={character._id}
                />
              ))
            ) : (
              <tr>
                <td colSpan={3}>No characters found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default CharacterRender
