import "./App.scss"
import { planets } from "./data/planets"
import Planet from "./components/Planet"
import { useState } from "react"

export default function App() {
  const [moonsCount, setMoonsCount] = useState([])

  function changeMoonsCount(id) {
    const length = planets[id].moons.length > 0 ? planets[id].moons.length : ""

    planets[id]?.moons
      ? setMoonsCount({ ...moonsCount, [id + 1]: length })
      : setMoonsCount({ ...moonsCount, [id + 1]: "" })
  }

  function workWithElements(el, status) {
    const clickedPlanetId = el.planetId - 1,
      focusedPlanet = planets[clickedPlanetId]

    switch (status) {
      case "add":
        focusedPlanet.moons
          ? focusedPlanet.moons.push(el)
          : (focusedPlanet.moons = [el])

        changeMoonsCount(clickedPlanetId)
        break

      case "delete":
        const elIndex = focusedPlanet.moons.indexOf(el)
        focusedPlanet.moons.splice(elIndex, 1)

        changeMoonsCount(clickedPlanetId)
        break

      default:
        break
    }
  }

  return (
    <main className="mainBlock">
      {planets.map(({ id, title }) => {
        return (
          <Planet
            id={id}
            title={title}
            changeFunc={workWithElements}
            key={id}
            moonsCount={moonsCount}
          />
        )
      })}
    </main>
  )
}
