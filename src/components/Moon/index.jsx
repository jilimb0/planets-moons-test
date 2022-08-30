import { useState } from "react"
import "./style.scss"

export default function Moon({ id, planetId, title, changeFunc }) {
  const [clicked, setClicked] = useState(false)
  const [status, setStatus] = useState("add")

  const handleMoonStatus = () => {
    setClicked((prev) => !prev)
    setStatus((prev) => (prev === "add" ? "delete" : "add"))
    changeFunc({ id, planetId, title }, status)
  }

  return (
    <li
      className={clicked ? "moonBlock clicked" : "moonBlock"}
      onClick={handleMoonStatus}
    >
      <span className="moonTitle">{title}</span>
    </li>
  )
}
