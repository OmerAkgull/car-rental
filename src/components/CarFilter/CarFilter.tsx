import { Col, Container, Row } from "react-bootstrap"
import classes from "./CarFilter.module.css"
import FilterButton from "../FilterButton/FilterButton"


const CarFilter = () => {
  return (
    <section className="pt-5 pb-5">
        <Container>
            <Row>
                <Col>
                <FilterButton text="All Cars"/>
                </Col>
                <Col>
                <FilterButton text="Automatic"/>
                </Col>
                <Col>
                <FilterButton text="Mini"/>
                </Col>
                <Col>
                <FilterButton text="Economic"/>
                </Col>
                <Col>
                <FilterButton text="Compact"/>
                </Col>
                <Col>
                <FilterButton text="Sedan"/>
                </Col>
                <Col>
                <FilterButton text="Wagon"/>
                </Col>
                <Col>
                <FilterButton text="Minivan"/>
                </Col>
                <Col>
                <FilterButton text="SUV"/>
                </Col>
            </Row>
        </Container>
        </section>
  )
}

export default CarFilter