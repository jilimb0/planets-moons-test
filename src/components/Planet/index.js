import "./style.scss"
import { moons } from "../../data/moons"
import Moon from "../Moon"

function Planet({ id: idOfPlanet, title, changeFunc, moonsCount }) {
  console.log(moonsCount[idOfPlanet])
  return (
    <section className="planetBlock">
      <span className="planetTitle">
        {title}
        <span className="moonsClickedCounter">{moonsCount[idOfPlanet]}</span>
      </span>

      {moons.map(({ id, planetId, title }) => {
        return (
          idOfPlanet === planetId && (
            <Moon
              id={id}
              planetId={planetId}
              title={title}
              changeFunc={changeFunc}
              key={id}
            />
          )
        )
      })}
    </section>
  )
}

export default Planet
