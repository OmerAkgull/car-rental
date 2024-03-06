import classes from "./FilterButton.module.css"

interface FilterButton {
    text: string,
    onclick: React.MouseEventHandler<HTMLButtonElement>,
    isActive: boolean,
}

const FilterButton = ({text, onclick, isActive}: FilterButton) => {
  return (
    <button onClick={onclick} className={`${classes.filterButton} ${isActive ? classes.active : ""}`}>{text}</button>
  )
}

export default FilterButton