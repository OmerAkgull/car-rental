import { Container, Row, Col } from "react-bootstrap"
import classes from "./BlogHeader.module.css"

const BlogHeader = () => {
  return (
    <section className={`pt-5 pb-5 ${classes.bgGreen}`}>
        <Container className="pb-5">
            <Row>
                <Col xs={12} md={8}>
                    <p className="fs-3 fw-bold">THE CAR RENTAL EXPERIENCE</p>
                    <h1 className={`fw-bold ${classes.colorYellow}`}>CAR RENTAL ONLY PRESENTS GOOD NEWS</h1>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
        </section>
  )
}

export default BlogHeader