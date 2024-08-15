/* eslint-disable react/prop-types */
import styled from "styled-components";

import { Card, CardTitle, CardBody, CardImg } from "reactstrap";

const StyledCard = styled(Card)`
  margin: 2rem;

  @media (min-width: 576px) {
    margin: 1rem 0rem;
  }

  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
`;

const PointCard = ({ subtitle, icon }) => (
  <StyledCard>
    <CardImg
      top
      width="100%"
      src={icon}
      alt="Card image cap"
      style={{
        padding: "2rem",
        margin: "auto",
        maxWidth: "80%",
        filter: "grayscale(100%)",
      }}
    />
    <CardBody>
      <CardTitle
        style={{
          textAlign: "left",
          width: "90%",
          margin: "auto",
          paddingBottom: "2rem",
        }}
      >
        <p>{subtitle}</p>
      </CardTitle>
      <p style={{ fontWeight: "bold" }}>{"See More >"}</p>
    </CardBody>
  </StyledCard>
);

export default PointCard;
