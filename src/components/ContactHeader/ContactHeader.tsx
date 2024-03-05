import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./ContactHeader.module.css";


const ContactHeader = () => {
  return (
    <section className={`${classes.bgGreen}`}>
      <Container className="pt-3">
        <Row>
          <Col className="mt-3 mt-sm-5">
            <p className={`mt-sm-3 mt-md-5 ${classes.headerSmallText}`}>
              THE CAR RENTAL EXPERIENCE
            </p>
            <h1 className={classes.headerBigText}>
              ALWAYS SMILING, ALWAYS READY TO HELP!
            </h1>
          </Col>
          <Col>
            <Image src="smile.png"></Image>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactHeader;
