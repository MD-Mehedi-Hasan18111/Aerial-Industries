import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: black;
  padding: 1rem 0rem;
  
  @media (min-width: 576px) {
    margin-top: 3rem;
    font-size: 2.5rem;

  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
  @media (min-width: 992px) {
    font-size: 2.5rem;

  }
`;
export default Title;
