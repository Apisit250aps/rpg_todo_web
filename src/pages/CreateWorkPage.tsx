import HeroAuth from "../components/layouts/Hero"
import Navbar from "../components/navigate/Navbar"
import Modal from "../components/modal/Modal"
import CreateWorkForm from "../components/forms/work/CreateWorkForm"
import WorkRender from "../components/base/work/WorkRender"
import { useState } from "react"
const CreateWorkPage = () => {
  const [onAddCharacter, setOnAddCharacter] = useState<any>()
  return (
    <>
      <HeroAuth>
        <Navbar modalId={"create_work_modal"}>
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
