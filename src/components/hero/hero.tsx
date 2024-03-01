import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <main className={classes.bgGreen}>
      <Container className="text-center pt-3">
        <p className="fs-4 fw-bold">CHECK OUT OUR SPECIAL</p>
        <p className={`fs-1 fw-bold ${classes.offer}`}>NEW YEAR'S OFFER</p>
        <button className={`mt-3 ${classes.heroButton}`}>READ MORE</button>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Image src="/heroCar.png"></Image>
        </div>
        <form className="mt-4 text-start">
            <Row>
                <Col md={10}>
                    <Row>
                        <Col sm={6} md={6}>fdsfsd</Col>
                        <Col sm={3} md={3}>fdsfsd</Col>
                        <Col sm={3} md={3}>fdsdfs</Col>
                    </Row>
                </Col>
                <Col md={2}><button>RESERVE</button></Col>
            </Row>
        </form>
      </Container>
    </main>
  );
};

export default Hero;
