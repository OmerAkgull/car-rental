import { Col, Container, Row } from "react-bootstrap";
import classes from "./Blog.module.css";
import CustomCard from "../card/Card";

const Blog = () => {
  return (
    <>
      <section className="bg-light">
        <Container className="pt-5 pb-5">
          <p className={`text-center fs-1 fw-bold ${classes.blogHeader}`}>
            GOOD NEWS ONLY
          </p>
          <p className="text-center">Check out our latest news and offers.</p>
          <Row className="mt-5">
            <Col
              lg={4}
              className="d-flex justify-content-center align-items-center"
            >
              <CustomCard
                src="/tn_las-vegas.jpg"
                header="Presenting our business model"
                content="Car rental industry experts will gather in Las Vegas from March 22-24."
              />
            </Col>
            <Col
              lg={4}
              className="mt-5 mt-lg-0 d-flex justify-content-center align-items-center"
            >
              <CustomCard
                src="/tn_web-early-bird.jpg"
                header="Reserve early to get a discount!"
                content="Reserve two weeks in advance to get discounts up to 50%! Don't miss the chance!"
              />
            </Col>
            <Col
              lg={4}
              className="mt-5 mt-lg-0 d-flex justify-content-center align-items-center"
            >
              <CustomCard
                src="/tn_istanbul.jpg"
                header="Welcome to Istanbul, travelers!"
                content="Check out our city guide. There are many unique locations to discover in this magnificent city!"
              />
            </Col>
          </Row>
          <div className="d-flex justify-content-center align-items-center">
            <button className={`mt-5 ${classes.blogButton}`}>SEE ALL</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Blog;
