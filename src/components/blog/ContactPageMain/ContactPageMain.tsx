import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./ContactPageMain.module.css"

interface ContactCard {
    header:string,
    mail:string,
}

const ContactCard = ({ header,mail }: ContactCard) => {
  return (
    <div className={`mt-3 mt-lg-0 bg-white d-flex gap-5 justify-content-center align-items-center rounded flex-column pb-5 pt-4 ${classes.border}`}>
      <p style={{color:'#56a647'}} className="fw-bold fs-4">{header}</p>
      <div className="d-flex gap-3"><FaPhoneAlt/>
      <p style={{fontSize: '18px'}}>+904349995843</p></div>
      <div className="d-flex gap-3"><CiMail/><p style={{fontSize: '18px'}}>{mail}</p></div>
    </div>
  );
};

const ContactPageMain = () => {
  return (
    <section className="bg-light pt-5 pb-5">
        <Container>
            <Row>
                <Col md={6} lg={4}><ContactCard header="RESERVATION SUPPORT" mail="reservations@carrental.com"/>
                </Col>
                <Col  md={6} lg={4}><ContactCard header="CUSTOMER SUPPORT" mail="customer.support@carrental.com"/>
                </Col>
                <Col md={6} lg={4}><ContactCard header="TECHNICAL SUPPORT" mail="reservations@carrental.com"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ContactPageMain