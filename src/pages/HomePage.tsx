import Navbar from "../components/navigate/Navbar"
import HeroAuth from "../components/layouts/Hero"
import CharacterRender from "../components/base/character/CharacterRender"
function HomePage() {
  return (
    <>
      <HeroAuth>
        <Navbar />
        <CharacterRender />
      </HeroAuth>
    </>
  )
}

export default HomePage
