/* eslint-disable react/jsx-key */
import styled from "styled-components";
import PropTypes from "prop-types";
import "../styles/config.scss";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardTitle, Button } from "reactstrap";
import Title from "../components/title";
import supporterLogosArray from "../assets/img/supporter-logo";
import mediaLogosArray from "../assets/img/media-logo";

const MasterHead = styled.section`
  position: relative;
  background-color: white;
  padding: 3rem 1rem;
`;

const Subtitle = styled.h2`
  color: #868e96;
  padding-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: center;
  @media (min-width: 576px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

const InvestButton = styled(Button)`
  background-color: black;
  padding: 0.5rem 2rem;
  margin-top: 1rem;
`;

const StyledCard = styled(Card)`
  color: "black";
  box-shadow: 5px 5px 10px #777;
  margin-bottom: 1.5rem;
  background-color: #75c581;
  border-color: transparent;
  transition: transform 0.2s;

  &:hover {
    background-color: #a5baa6;
    transform: translateY(0.3rem);
  }
  &.active {
    background-color: #a5baa6;
  }
  a {
    color: black;
    text-decoration: none;
  }
  @media (max-width: 576px) {
    max-width: 95%;
    display: block;
    margin: auto;
  }

  @media (max-width: 767px) {
    max-width: 85%;
    display: block;
    margin: auto;
  }
`;

const SloganBig = styled.h2`
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: normal;
  font-size: 2rem;

  @media (min-width: 576px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;
  }
`;

const SloganSmall = styled.h3`
  font-weight: normal;
  font-size: 1.5rem;

  @media (min-width: 576px) {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
  @media (min-width: 992px) {
    font-size: 1.7rem;
  }
`;

const StyledCardTitle = styled(CardTitle)`
  text-align: center;
  width: 90%;
  margin: auto;
  ${StyledCard}:hover & {
    display: ${(props) => (props.hideonhover ? "none" : "block")};
  }
  @media (min-width: 992px) {
    padding-top: 2rem;
  }
`;

const HoverCard = styled.div`
  display: none;
  ${StyledCard}:hover & {
    display: ${(props) => (props.hideonhover ? "block" : "none")};
  }
`;

const LogoImage = styled.img`
  max-height: 100px;
  max-width: ${(props) => 100 / props.numElements}%;
  padding: 0.5rem;
  margin: auto;
  display: inline;
  filter: grayscale(100%);
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const CoCard = ({ sloganBig, sloganSmall, companyName, linkTo, info }) => (
  <StyledCard body>
    <Link to={linkTo || ""}>
      <div
        style={{
          minHeight: "250px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <HoverCard hideonhover={info || undefined}>
          <h3 style={{ textAlign: "left", color: "white" }}>{companyName}</h3>
          <p style={{ color: "white" }}>{info}</p>
          <Link to="/signup">
            <InvestButton>Invest</InvestButton>
          </Link>
        </HoverCard>
        <StyledCardTitle hideonhover={info || undefined}>
          <SloganBig>{sloganBig}</SloganBig>
          <SloganSmall>{sloganSmall}</SloganSmall>
          <h4
            style={{
              textAlign: "right",
              paddingTop: "3rem",
              marginBottom: "-3rem",
              color: "white",
            }}
          >
            {companyName}
          </h4>
        </StyledCardTitle>
      </div>
    </Link>
  </StyledCard>
);

CoCard.propTypes = {
  sloganBig: PropTypes.string,
  sloganSmall: PropTypes.string,
  companyName: PropTypes.string,
  linkTo: PropTypes.string,
  info: PropTypes.string,
};

export default function Home() {
  const co1 = {
    sloganBig: "Micro",
    sloganSmall: "Nutrients",
    companyName: "iPollen8",
    linkTo: "/ipollen8",
  };
  const co2 = {
    sloganBig: "Precision",
    sloganSmall: "Mechanization",
    companyName: "cygnus",
    info: "An industrial agriculture aerial robotic system designed to revolutionize nature-based crop dusting",
  };
  const co3 = {
    sloganBig: "Energy",
    sloganSmall: "Resource",
    companyName: "H.A.W.K.",
    info: "High Altitude Wind Kite provides clean electricity to power all your farm equipments remotely",
  };

  return (
    <MasterHead>
      <Container>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <Title>Aerial Industries Pte. Ltd.</Title>
            <Subtitle>
              Next generation open-farm precision technologies for a smarter,
              healthier and more sustainable arable farming ecosystem
            </Subtitle>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="mb-5">
            <CoCard
              sloganBig={co1.sloganBig}
              sloganSmall={co1.sloganSmall}
              companyName={co1.companyName}
              linkTo={co1.linkTo}
            />
          </Col>
          <Col md="4" className="mb-5">
            <CoCard
              sloganBig={co2.sloganBig}
              sloganSmall={co2.sloganSmall}
              companyName={co2.companyName}
              info={co2.info}
            />
          </Col>
          <Col md="4" className="mb-5">
            <CoCard
              sloganBig={co3.sloganBig}
              sloganSmall={co3.sloganSmall}
              companyName={co3.companyName}
              info={co3.info}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "5rem" }}>
          <Col md={{ size: 10, offset: 1 }}>
            <h4>Supported By</h4>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: "-1rem" }}>
            {supporterLogosArray.map((logo) => (
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <LogoImage
                  numElements={supporterLogosArray.length}
                  src={logo.image}
                />
              </a>
            ))}
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 10, offset: 1 }}>
            <h4>Media</h4>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", marginTop: "-1rem" }}>
            {mediaLogosArray.map((logo) => (
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <LogoImage
                  numElements={mediaLogosArray.length}
                  src={logo.image}
                />
              </a>
            ))}
          </Col>
        </Row>
      </Container>
    </MasterHead>
  );
}
