import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./Support.module.css";

const Support = () => {
  return (
    <section className={`pt-5 pb-5 ${classes.bgGreen}`}>
      <Container>
        <h1 className="fw-bold text-center">CUSTOMER SUPPORT</h1>
        <p className="text-center mt-2">Find out everything you need to know about rental conditions.</p>
        <Row className="mt-4">
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
                <Image src="/cs1.PNG"/>
                <p className="fs-5">BEFORE RENT</p>
            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
            <Image src="/cs2.PNG"/>
            <p className="fs-5">RESERVATIONS</p>

            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
            <Image src="/cs3.PNG"/>
            <p className="fs-5">PICK UP</p>

            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
            <Image src="/cs4.PNG"/>
            <p className="fs-5">DURING RENT</p>

            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
            <Image src="/cs5.PNG"/>
            <p className="fs-5">DROP OFF</p>

            </Col>
            <Col className="d-flex flex-column justify-content-center align-items-center" md={2} xs={4}>
            <Image src="/cs6.PNG"/>
            <p className="fs-5">TECHNICAL</p>

            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Support;
