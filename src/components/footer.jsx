import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 2rem;
  background-color: #e9ecef;
`;

export default function MyFooter() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col md={{ size: 8, offset: 2 }}>
            <p className="text-muted small mb-0 text-center">
              &copy; iPollen8 2019. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}
