import "./App.scss"
import { planets } from "./data/planets"
import Planet from "./components/Planet"
import { useEffect, useState } from "react"

function App() {
  const [planetsArr] = useState(planets)
  const [moonsCount, setMoonsCount] = useState([])

  function changeMoonsCount(id) {
    const length =
      planetsArr[id].moons.length > 0 ? planetsArr[id].moons.length : ""
    planetsArr[id]?.moons
      ? setMoonsCount({ ...moonsCount, [id + 1]: length })
      : setMoonsCount({ ...moonsCount, [id + 1]: "" })
  }

  function changeSmth(el, status) {
    const clickedPlanetId = el.planetId - 1
    const focusedPlanet = planetsArr[clickedPlanetId]

    if (status === "add") {
      focusedPlanet.moons
        ? focusedPlanet.moons.push(el)
        : (focusedPlanet.moons = [el])

      changeMoonsCount(clickedPlanetId)
    } else if (status === "delete") {
      const elIndex = focusedPlanet.moons.indexOf(el)
      focusedPlanet.moons.splice(elIndex, 1)

      changeMoonsCount(clickedPlanetId)
    }
  }

  return (
    <main className="mainBlock">
      {planetsArr.map(({ id, title }) => {
        return (
          <Planet
            id={id}
            title={title}
            changeFunc={changeSmth}
            key={id}
            moonsCount={moonsCount}
          />
        )
      })}
    </main>
  )
}

export default App
