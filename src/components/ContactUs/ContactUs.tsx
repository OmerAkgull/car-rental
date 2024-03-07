import { Col, Container, Row } from "react-bootstrap";
import classes from "./ContactUs.module.css";
import { LuAlarmClock } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsMegaphone } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="pt-5 pb-5">
      <h1 className={`text-center fw-bold ${classes.header}`}>CONTACT US</h1>
      <Container className="pb-5">
        <Row className="mt-5">
          <Col xs={6} md={3} className={classes.firstCard}>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex gap-2">
                <LuAlarmClock style={{ fontSize: "25px", color: "#56a647" }} />
                <h4 className={classes.header}>WORKING HOURS</h4>
              </div>
              <p className="mt-4 fw-bold">Monday- Friday:</p>
              <p>9.00 - 18.00</p>
            </div>
          </Col>
          <Col xs={6} md={3} className={classes.cards}>
            {" "}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex gap-2">
                <FaPhoneAlt style={{ fontSize: "25px", color: "#56a647" }} />
                <h4 className={classes.header}>PHONE</h4>
              </div>
              <p className="mt-4 fw-bold">Reservation Support</p>
              <p>+904349995843</p>
              <p className="mt-4 fw-bold">Sales Department</p>
              <p>+904838889283</p>
            </div>
          </Col>
          <Col xs={6} md={3} className={`pt-4 mt-3 mt-md-0 pt-md-0 ${classes.thirdCard}`}>
            {" "}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex gap-2">
                <CiMail style={{ fontSize: "25px", color: "#56a647" }} />
                <h4 className={classes.header}>E-MAIL</h4>
              </div>
              <div className="d-flex mt-4 gap-1">
                <FaLongArrowAltRight className={classes.header} /> <p> Reservation Support</p>
              </div>
              <div className="d-flex mt-4 gap-1">
                <FaLongArrowAltRight className={classes.header} /> <p> Sales Department</p>
              </div>
            </div>
          </Col>
          <Col xs={6} md={3} className={`pt-4 mt-2 mt-md-0 pt-md-0 ${classes.cards}`}>
            {" "}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex gap-2">
                <BsMegaphone style={{ fontSize: "25px", color: "#56a647" }} />
                <h4 className={classes.header}>FEEDBACK</h4>
              </div>
              <div className="d-flex mt-4 gap-1">
                <FaLongArrowAltRight className={classes.header} /> <p>Send feedback</p>
              </div>
              <div className="d-flex mt-4 gap-1">
                <FaLongArrowAltRight className={classes.header} /> <p>Complaint form</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
