import { Container, Image } from "react-bootstrap";
import classes from "./Footer.module.css";

const Footer = () => {


  return (
    <footer className={classes.bgGreen}>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className={classes.footerText}>Subscribe to our newsletter and get special offers.</p>
        <form className="d-flex gap-4">
          <input className={classes.input} placeholder="Your email address"/>
          <button onClick={(e) => e.preventDefault()} className={`${classes.button}`}>SUBSCRIBE NOW</button>
        </form>
        <div className="d-flex mt-4 gap-3 justify-content-center align-items-center">
          <Image className={classes.brandLogo} src="/Instagram_Glyph_White.png" alt="instagram logo"></Image>
          <Image className={classes.brandLogo} src="/Facebook_Logo_Secondary.png" alt="facebook logo"></Image>
        </div>
        <p className={`mt-4 ${classes.copyright}`}>© 2024. Car Rental</p>
      </Container>
    </footer>
  );
};

export default Footer;
