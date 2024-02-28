import { Container } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.bgGreen}>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className={classes.footerText}>Subscribe to our newsletter and get special offers.</p>
        <form className="d-flex gap-4">
          <input className={classes.input} placeholder="Your email address"/>
          <button type="submit" className={`${classes.button}`}>SUBSCRIBE NOW</button>
        </form>
        <div className="d-flex justify-content-center align-items-center"></div>
      </Container>
    </footer>
  );
};

export default Footer;
