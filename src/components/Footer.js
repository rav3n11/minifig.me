import { Container, Row, Col } from "react-bootstrap";
// import lego from "../assets/icons/lego.svg";
import lego_white from "../assets/icons/lego-white.svg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className={`footer footer-light`}>
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
          <img className="logo" src={lego_white} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/bereket-terefe-2307701a1"><BsLinkedin className={`social-img light`} /></a>
              <a href="https://github.com/rav3n11"><BsGithub className={`social-img light`}/></a>
              <a href="https://t.me/Bereke_t"><BsTelegram className={`social-img light`}/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
