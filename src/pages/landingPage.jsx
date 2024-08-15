import styled from "styled-components";
import "../styles/config.scss";
import { Container, Row, Col } from "reactstrap";
import EmailSignUp from "../components/signup";
import PointCard from "../components/pointCard";
import BlackButton from "../components/blackButton";

import coverImage from "../assets/img/background/farmers-drawing.jpg";
import sproutIcon from "../assets/img/icons/001-sprout.png";
import worldIcon from "../assets/img/icons/007-world.png";
import solarIcon from "../assets/img/icons/008-solar-energy.png";
import farmerIcon from "../assets/img/icons/002-farmer.png";
import peppersImage from "../assets/img/background/peppers.jpg";

const GraySection = styled.section`
  position: relative;
  background-color: #e9ecef;
  padding: 6rem 1rem;

  @media (min-width: 576px) {
    padding: 4rem 0rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 0rem;
  }
  @media (min-width: 992px) {
    padding: 4rem 0rem;
  }
`;

const TransparentSection = styled.section`
  position: relative;
  padding: 6rem 1rem;

  @media (min-width: 576px) {
    padding: 4rem 0rem;
  }

  @media (min-width: 768px) {
    padding: 4rem 0rem;
  }
  @media (min-width: 992px) {
    padding: 4rem 0rem;
  }
`;

const CoverImage = styled.div`
  background-image: url(${coverImage});
  background-position-x: -2rem;
  background-repeat: no-repeat;
  background-size: contain;
  padding-top: 12rem;

  @media (min-width: 576px) {
    padding-top: 20rem;
  }

  @media (min-width: 768px) {
    margin-top: -5rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 992px) {
    background-position-x: right;
    background-repeat: no-repeat;
    background-size: 80%;
    padding-top: 10rem;
  }
`;

const MasterHeadH1 = styled.h1`
  font-size: 3rem;

  @media (min-width: 576px) {
    margin-top: 8rem;
  }

  @media (min-width: 768px) {
    margin-top: 16rem;
    font-size: 4rem;
  }
  @media (min-width: 992px) {
    font-size: 3rem;
    margin-top: 0rem;
  }
`;

const SectionH1 = styled.h1`
  margin-top: 4rem;
  margin-bottom: 1rem;
  text-align: ${(props) => (props.left ? "left" : "center")};
  font-size: 3rem;
`;

const SectionH2 = styled.h2`
  text-align: ${(props) => (props.left ? "left" : "center")};

  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.2;
  color: #666;

  @media (min-width: 576px) {
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
`;

const SectionH3 = styled.h3`
  margin-top: 1rem;
  margin-bottom: 3rem;
  text-align: left;
  font-size: 1.4rem;
  line-height: 1.5;
  color: #666;
`;

const Placeholder = styled.div`
  border: solid 125px #444;
  width: 300px;
  height: 300px;
  display: block;
  margin: auto;
`;

export default function LandingPage() {
  return (
    <div>
      <CoverImage>
        <TransparentSection>
          <Container>
            <Row>
              <Col>
                <MasterHeadH1>Invest in Your Meals</MasterHeadH1>
                <SectionH2 left>We care about how our food is grown.</SectionH2>
                <SectionH2 left>
                  We care about the communities that grow our food.
                </SectionH2>
                <BlackButton text="Find out more" />
              </Col>
            </Row>
          </Container>
        </TransparentSection>
      </CoverImage>

      <GraySection>
        <Container>
          <Row>
            <Col md={{ size: 10, offset: 1 }}>
              <SectionH1>How it works</SectionH1>
              <SectionH2>Make Money While Eating Healthier</SectionH2>
            </Col>
          </Row>
          <Row>
            <Col md="6" lg="3">
              <PointCard subtitle="Zero Residue Farmers" icon={sproutIcon} />
            </Col>
            <Col md="6" lg="3">
              <PointCard subtitle="Precision Mechanization" icon={farmerIcon} />
            </Col>
            <Col md="6" lg="3">
              <PointCard subtitle="Community Impact" icon={worldIcon} />
            </Col>
            <Col md="6" lg="3">
              <PointCard subtitle="Innovative Farms" icon={solarIcon} />
            </Col>
          </Row>
        </Container>
      </GraySection>

      <TransparentSection>
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <SectionH1 left>Invest in Impact Farmers</SectionH1>
              <SectionH3 left>
                Farmers focused on sustainable community-based farmfield
                innovations in mechanization, agro-inputs and behavioral change
                are changing agriculture for the future.
              </SectionH3>
              <blockquote className="blockquote">
                <p className="mb-0">
                  Africa utilizes less than 40% of its 874 million hectares of
                  arable land, yet spends US $35 billon importing food every
                  year.
                </p>
                <footer className="blockquote-footer mt-2">
                  Adesina Akinwumi, African Development Bank
                </footer>
              </blockquote>
              <BlackButton text="Fund Farmers" />
            </Col>
            <Col md="4">
              <img
                alt="fresh peppers"
                style={{ maxWidth: "100%", padding: "1rem", marginTop: "1rem" }}
                src={peppersImage}
              />
            </Col>
          </Row>
        </Container>
      </TransparentSection>

      <GraySection>
        <Container>
          <Row className="text-center">
            <Col md={{ size: 10, offset: 1 }}>
              <SectionH1>From Farm to Fork</SectionH1>
              <SectionH2>Make Money While Eating Healthier</SectionH2>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md="4">
              <Placeholder />
              <p className="mt-3">
                Aerial Industries applies all crop enhancers, protectants and
                sti...
              </p>
            </Col>
            <Col md="4">
              <Placeholder />
              <p className="mt-3">
                No synthetic compounds are in the residue tests conducted on...
              </p>
            </Col>
            <Col md="4">
              <Placeholder />
              <p className="mt-3">
                Bayo practices the old techniques of conditioning for soil
                aggregat...
              </p>
            </Col>
          </Row>
        </Container>
      </GraySection>

      <EmailSignUp />
    </div>
  );
}
