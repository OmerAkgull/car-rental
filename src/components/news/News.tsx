
import { Col, Container, Row } from "react-bootstrap"
import classes from "./News.module.css"
import CustomCard from "../card/Card"

const News = () => {
  return (
    <section className="bg-light pt-5 pb-5">
        <h1 className={`text-center fw-bold ${classes.header}`}>NEWS</h1>
        <Container fluid className="pb-5">
            <Row className="mt-5">
                <Col className="d-flex mt-3 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn_las-vegas.jpg"
                header="Presenting our business model"
                content="Car rental industry experts will gather in Las Vegas from March 22-24."
              />
                </Col>
                <Col className="d-flex mt-3 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn_web-early-bird.jpg"
                header="Reserve early to get a discount!"
                content="Reserve two weeks in advance to get discounts up to 50%! Don't miss the chance!"
              />
                </Col>
                <Col className="d-flex mt-3 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn_istanbul.jpg"
                header="Welcome to Istanbul, travelers!"
                content="Check out our city guide. There are many unique locations to discover in this magnificent city!"
              />
                </Col>
                <Col className="d-flex mt-3 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn_tomislava_ravlic_pr_fotografija.jpg"
                header="Car Rental is empowering its squad!"
                content="In 2023, Car Rental's employee numbers have gone up by 30%!"
              />
                </Col>
                <Col className="d-flex mt-3 mt-lg-4 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn__dsc4846-edit.jpg"
                header="Always safe with Car Rental"
                content="Read 5 tips from our travel expert to make your drive enjoyable and safe."
              />
                </Col>
                <Col className="d-flex mt-3 mt-lg-4 justify-content-center align-items-center" xs={12} md={4} lg={3}><CustomCard
                src="/tn_berlin_1.jpg"
                header="We will be in Berlin in October"
                content="We will be in Berlin in October to present the newest members of our fleet."
              />
                </Col>
            </Row>
        </Container>
        </section>
  )
}

export default News