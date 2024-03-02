import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./hero.module.css";
import { Select, DatePicker, TimePicker } from "antd";
import "./override.css";

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
        <form className={`mt-5 text-start ${classes.reserveForm}`}>
          <Row>
            <Col md={10}>
              <Row>
                <Col sm={6} md={6} className="d-flex flex-column">
                  <p>Pick up from</p>
                  <Select
                    placeholder="Choose"
                    style={{ width: "100%" }}
                    options={[
                      { value: "Ankara Airport", label: "Ankara Airport" },
                      { value: "Adana Airport", label: "Adana Airport" },
                      { value: "Antalya Airport", label: "Antalya Airport" },
                      { value: "Dalaman Airport", label: "Dalaman Airport" },
                      { value: "Istanbul Airport", label: "Istanbul Airport" },
                    ]}
                  />
                </Col>
                <Col className="d-flex flex-column" sm={3} md={3}>
                  <p>Pick up date</p>
                  <div className="d-flex">
                    <DatePicker />
                    <TimePicker minuteStep={30} format={'HH:mm'} />
                  </div>
                </Col>
                <Col sm={3} md={3} className="d-flex flex-column">
                  <p>Drop off date</p>
                  <div className="d-flex">
                    <DatePicker />
                    <TimePicker minuteStep={30} format={'HH:mm'} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={2}>
              <button onClick={(e) => e.preventDefault()} className={`mt-2 ms-lg-4 ${classes.heroButton}`}>RESERVE</button>
            </Col>
          </Row>
        </form>
      </Container>
    </main>
  );
};

export default Hero;
