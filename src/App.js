import "./App.scss"
import { planets } from "./data/planets"
import { moons } from "./data/moons"
import Planet from "./components/Planet"

export default function App() {
  const getMoonsById = (id) => moons.filter((moon) => moon.planetId === id)

  return (
    <main className="mainBlock">
      {planets.map(({ id, title }) => {
        return (
          <Planet id={id} title={title} key={id} moons={getMoonsById(id)} />
        )
      })}
    </main>
  )
}
