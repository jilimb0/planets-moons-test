import "./style.scss"
import Moon from "../Moon"
import { useState } from "react"

const findSize = (i) => i * 15 + 100,
  findMargin = (i) => i * 5

export default function Planet({ id, title, moons }) {
  const [checkedMoons, handleCheck] = useState([])

  const handleClick = (id) => {
    if (!checkedMoons.includes(id)) {
      handleCheck([...checkedMoons, id])
    } else {
      const filtredMoons = checkedMoons.filter((moonId) => moonId !== id)
      handleCheck(filtredMoons)
    }
  }

  return (
    <section className="planetBlock">
      <p
        className="planetTitle"
        style={{
          marginRight: findMargin(checkedMoons.length + 1),
        }}
      >
        {checkedMoons.map((moonId, i) => (
          <div
            style={{ width: findSize(i + 1), height: findSize(i + 1) }}
            className="absolute-cycles"
            key={moonId}
          />
        ))}

        {title}
        <span className="moonsClickedCounter">
          {checkedMoons ? checkedMoons.length : ""}
        </span>
      </p>

      {moons.map(({ id, title }) => {
        return (
          <Moon
            id={id}
            title={title}
            key={id}
            handleClick={handleClick}
            checked={checkedMoons.includes(id)}
          />
        )
      })}
    </section>
  )
}
