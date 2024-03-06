import classes from "./FilterButton.module.css"

interface FilterButton {
    text: string,
}

const FilterButton = ({text}: FilterButton) => {
  return (
    <button className={classes.filterButton}>{text}</button>
  )
}

export default FilterButton