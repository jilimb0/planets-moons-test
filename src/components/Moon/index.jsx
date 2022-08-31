import "./style.scss"

export default function Moon({ id, title, handleClick, checked }) {
  return (
    <li
      onClick={() => handleClick(id)}
      className={`moonBlock ${checked ? "checked" : ""}`}
    >
      {title}
    </li>
  )
}
