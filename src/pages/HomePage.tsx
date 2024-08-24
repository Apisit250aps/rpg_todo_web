import Navbar from "../components/navigate/Navbar"
import HeroAuth from "../components/layouts/Hero"
import CharacterRender from "../components/base/character/CharacterRender"
import CharacterCreateModal from "../components/forms/character/CharacterCreateModal"
import {  useState } from "react"
function HomePage() {
  const [onAddCharacter, setOnAddCharacter] = useState<any>()
  return (
    <>
      <HeroAuth>
        <Navbar modalId={"create_character_form_modal"} title={"Todo"}>
          <CharacterCreateModal onDataAdd={setOnAddCharacter} />
        </Navbar>
        <CharacterRender refreshTrigger={onAddCharacter} />
      </HeroAuth>
    </>
  )
}

export default HomePage
