import { FC, useCallback, useEffect, useState } from "react"
import HeroAuth from "../components/layouts/Hero"
import Navbar from "../components/navigate/Navbar"
import apiClient from "../configs/axios"
import { useParams } from "react-router-dom"
import WorkStat from "../components/base/work/WorkStat"
import TasksRender from "../components/base/task/TasksRender"

const TasksPage: FC = () => {
  const [character, setCharacter] = useState<{ name: string }>({
    name: ""
  })
  const [work, setWork] = useState<{ name: string; tasks: [] }>({
    name: "",
    tasks: []
  })
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
  }, [workId])

  useEffect(() => {
    fetchCharacter()
  }, [characterId])
  //
  return (
    <>
      <HeroAuth>
        <Navbar modalId={""} title={character.name}></Navbar>
        <WorkStat name={work.name} />
        <table className="table bg-white mt-3 rounded-2xl">
          <TasksRender tasks={work.tasks} />
        </table>
      </HeroAuth>
    </>
  )
}

export default TasksPage
