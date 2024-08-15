/* eslint-disable react/prop-types */
import { Form, FormGroup, Label, Input } from "reactstrap";

const FilterBox = ({ filters, type }) => (
  <Form>
    {type === "dropdown" ? (
      <FormGroup>
        <Input type="select" name="select" id="exampleSelect">
          {filters.map((item, index) => (
            <option key={index} disabled={index !== 0}>
              {item}
            </option>
          ))}
        </Input>
      </FormGroup>
    ) : (
      <div>
        {filters.map((item, index) => (
          <FormGroup check key={index}>
            <Label check style={{ marginBottom: "1rem" }}>
              <Input type="checkbox" />
              {item}
            </Label>
          </FormGroup>
        ))}
      </div>
    )}
  </Form>
);

export default FilterBox;
