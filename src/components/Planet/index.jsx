import "./style.scss"
import { moons } from "../../data/moons"
import Moon from "../Moon"

export default function Planet({ id, title, changeFunc, moonsCount }) {
  return (
    <section className="planetBlock">
      <p className="planetTitle">
        {title}
        <span className="moonsClickedCounter">{moonsCount[id]}</span>
      </p>

      {moons.map(({ id: moonId, planetId, title }) => {
        return (
          id === planetId && (
            <Moon
              id={moonId}
              planetId={planetId}
              title={title}
              changeFunc={changeFunc}
              key={moonId}
            />
          )
        )
      })}
    </section>
  )
}
