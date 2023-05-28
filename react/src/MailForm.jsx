import { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  color: white;
  background: #6e7582;
  display: flex;
  padding: 5px;
`;

const FormGroup = styled.fieldset`
  border: 0;
  padding: 0;
  flex: ${(props) => props.last && "1"};
  text-align: ${(props) => props.last && "right"};

  label {
    margin-left: ${(props) => (props.first ? "0px" : "10px")};
  }
`;

const FormLabel = styled.label`
  margin-right: 5px;
`;

function MailForm({ onSubscribeNewsletter }) {
  console.log("render <MailForm />");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubscribeNewsletter(firstName);
  };

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [frequency, setFrequency] = useState("monthly");

  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup first={true}>
          <FormLabel>first name</FormLabel>
          <input onChange={(evt) => setFirstName(evt.target.value)} />
        </FormGroup>
        <FormGroup>
          <FormLabel>email</FormLabel>
          <input onChange={(evt) => setEmail(evt.target.value)} />
        </FormGroup>
        <FormGroup>
          <FormLabel>frequency</FormLabel>
          <select onChange={(evt) => setFrequency(evt.target.value)}>
            <option>weekly</option>
            <option>monthly</option>
          </select>
        </FormGroup>
        <FormGroup last={true}>
          <button type="submit">subscribe to newsletter</button>
        </FormGroup>
      </FormContainer>
    </>
  );
}

export default MailForm;
