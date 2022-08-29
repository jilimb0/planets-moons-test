import { useState } from "react"
import "./style.scss"

function Moon({ id, planetId, title, changeFunc }) {
  const [clicked, setClicked] = useState(false)
  const [status, setStatus] = useState("add")

  return (
    <li
      className={clicked ? "moonBlock clicked" : "moonBlock"}
      onClick={() => {
        setClicked((prev) => !prev)
        setStatus((prev) => (prev === "add" ? "delete" : "add"))
        changeFunc({ id, planetId, title }, status)
      }}
    >
      <span className="moonTitle">{title}</span>
    </li>
  )
}

export default Moon
