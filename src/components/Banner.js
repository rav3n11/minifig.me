import { useState, useEffect, useContext, useMemo } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import batman from "../assets/icons/batman.svg";
import superman from "../assets/icons/lego-superman.svg";
import { BsArrowRightSquare } from "react-icons/bs";
import JSX_withParallax from "./util/ParallaxJSXWrapper";
import Camera from "./Camera";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const [anchor] = useState(0);
  const toRotate = [
    "Initializing batcave music...",
    "Choosing Stack...",
    "MERN...",
    "PERN...",
    "PHART... Ha Ha...",
  ];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      console.log({ index });
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const Batman = useMemo(
    () =>
      JSX_withParallax(
        <div className=" batman">
          <img src={batman} className="floating-image" alt="Lego batman" />
        </div>,
        0.05
      ),
    [anchor]
  );

  const Superman = useMemo(
    () =>
      JSX_withParallax(
        <div className="superman">
          <img src={superman} className="floating-image" alt="Lego superman" />
        </div>,
        0.05
      ),
    [anchor]
  );
  return (
    <section className={`banner banner-light`} id="home">
      <div className={`spacer`}></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <h1>Want your own lego minifigure? </h1>
              <p>
                 <br />
                Let's start by taking a picture...
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="camera-wrapper">
            <Camera />
            {/* <Nav.Link
                href="#connect"
                className={`button light`}
                onClick={() => console.log("connect")}
              >
                Let’s Connect <BsArrowRightSquare size={25} />
              </Nav.Link> */}
          </Col>

        </Row>
      </Container>
    </section>
  );
};
