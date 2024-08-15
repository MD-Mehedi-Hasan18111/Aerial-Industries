/* eslint-disable react/prop-types */

import { Button } from "reactstrap";

const BlackButton = ({ text }) => (
  <Button
    size="lg"
    style={{
      backgroundColor: "#333",
      borderColor: "#333",
      marginTop: "1.5rem",
      padding: "1rem 2rem",
    }}
  >
    {text}
  </Button>
);

export default BlackButton;
