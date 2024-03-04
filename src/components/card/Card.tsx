import classes from "./Card.module.css";

interface Card {
    src: string,
    header: string,
    content:string
}

const CustomCard = ({src, header, content}: Card) => {
  return (
    <>
    <div className={`bg-white ${classes.cardPadding}`}>
        <div className={classes.imgWrapper}>
            <img className={classes.imgRadius} src={src}></img>
        </div>
        <h5 className="text-center fw-bold pt-2">{header}</h5>
        <p className="text-center mt-2">{content}</p>
    </div>
    </>
  )
}

export default CustomCard