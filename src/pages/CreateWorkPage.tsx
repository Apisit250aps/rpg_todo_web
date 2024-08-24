import HeroAuth from "../components/layouts/Hero"
import Navbar from "../components/navigate/Navbar"
import Modal from "../components/modal/Modal"
import CreateWorkForm from "../components/forms/work/CreateWorkForm"
import WorkRender from "../components/base/work/WorkRender"
import { useCallback, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import apiClient from "../configs/axios"

const CreateWorkPage = () => {
  const [character, setCharacter] = useState<{name:string}>({name:''})
  const { characterId } = useParams()

  const fetchCharacter = useCallback(async () => {
    await apiClient.get(`/character/get/${characterId}`).then((response) => {
      if (response.status === 200) {
        setCharacter(response.data.characters[0])
      }
    })
  }, [characterId])

  useEffect(()=>{
    fetchCharacter()
  }, [])

  

  const [onAddCharacter, setOnAddCharacter] = useState<any>()
  return (
    <>
      <HeroAuth>
        <Navbar modalId={"create_work_modal"} title={character.name}>
          <Modal id={"create_work_modal"} title={"Create new"}>
            <CreateWorkForm onCreated={setOnAddCharacter} />
          </Modal>
        </Navbar>
        <WorkRender refreshTrigger={onAddCharacter} />
      </HeroAuth>
    </>
  )
}

export default CreateWorkPage
