import { FC, useCallback, useEffect, useState } from "react"
import HeroAuth from "../components/layouts/Hero"
import Navbar from "../components/navigate/Navbar"
import apiClient from "../configs/axios"
import { useParams } from "react-router-dom"
import WorkStat from "../components/base/work/WorkStat"
import TasksRender from "../components/base/task/TasksRender"
import Modal from "../components/modal/Modal"
import TaskForm from "../components/forms/task/TaskForm"
import { handleCloseModal } from "../components/modal"
import Swal from "sweetalert2"
TaskForm
const TasksPage: FC = () => {
  const [character, setCharacter] = useState<{ name: string }>({
    name: ""
  })
  const [work, setWork] = useState<{ name: string; tasks: [] }>({
    name: "",
    tasks: []
  })

  const [onWorkAdd, setWorkAdd] = useState<any>()
  const { characterId, workId } = useParams()

  const fetchCharacter = useCallback(async () => {
    await apiClient.get(`/character/get/${characterId}`).then((response) => {
      if (response.status === 200) {
        setCharacter(response.data.characters[0])
      }
    })
  }, [characterId])

  const fetchWorkData = useCallback(async () => {
    await apiClient.get(`/work/get/${workId}`).then((response) => {
      if (response.status === 200) {
        setWork(response.data[0])
      }
    })
  }, [work])

  useEffect(() => {
    fetchWorkData()
  }, [workId, onWorkAdd])

  useEffect(() => {
    fetchCharacter()
  }, [characterId])
  //
  //
  const [name, setName] = useState<string>("")
  const [description, setDesc] = useState<string>("")
  const [diff, setDiff] = useState<string>("1") // Default to "1" for Easy
  const [start_date, setStart] = useState<string>("")
  const [due_date, setDue] = useState<string>("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await apiClient({
      method: "post",
      url: `/tasks/create/${workId}`,
      data: {
        name,
        description,
        diff,
        start_date,
        due_date
      }
    }).then((response) => {
      if (response.status === 201) {
        handleCloseModal("task_form")
        Swal.fire({
          title: "Task Create",
          icon: "success"
        })
        setName("")
        setDesc("")
        setDiff("")
        setStart("")
        setDue("")
        setWorkAdd(response.data)
      }
    })
  }

  return (
    <>
      <HeroAuth>
        <Navbar modalId={"task_form"} title={character.name}>
          <Modal id={"task_form"} title={"New task"}>
            <TaskForm
              name={name}
              setName={setName}
              desc={description}
              setDesc={setDesc}
              diff={diff}
              setDiff={setDiff}
              start={start_date}
              setStart={setStart}
              due={due_date}
              setDue={setDue}
              handleSubmit={handleSubmit}
            />
          </Modal>
        </Navbar>
        <WorkStat name={work.name} />
        <table className="table bg-white mt-3 rounded-2xl">
          <TasksRender tasks={work.tasks} />
        </table>
      </HeroAuth>
    </>
  )
}

export default TasksPage
