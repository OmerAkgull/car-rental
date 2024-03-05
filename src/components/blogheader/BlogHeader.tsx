import { Container} from "react-bootstrap"
import classes from "./BlogHeader.module.css"

const BlogHeader = () => {
  return (
    <section className={`pt-5 pb-4 ${classes.bgGreen}`}>
        <Container className="pb-5 text-center">
                    <p className="fs-2 fw-bold">THE CAR RENTAL EXPERIENCE</p>
                    <h1 className={`fw-bold ${classes.colorYellow}`}>CAR RENTAL ONLY PRESENTS </h1>
                    <h1 className={`fw-bold ${classes.colorYellow}`}>GOOD NEWS</h1>
        </Container>
        </section>
  )
}

export default BlogHeader