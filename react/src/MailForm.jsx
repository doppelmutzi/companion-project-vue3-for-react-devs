import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>first name</label>
          <input onChange={(evt) => setFirstName(evt.target.value)} />
        </fieldset>
        <fieldset>
          <label>email</label>
          <input onChange={(evt) => setEmail(evt.target.value)} />
        </fieldset>
        <fieldset>
          <label>frequency</label>
          <select onChange={(evt) => setFrequency(evt.target.value)}>
            <option>weekly</option>
            <option>monthly</option>
          </select>
        </fieldset>
        <fieldset>
          <button type="submit">subscribe to newsletter</button>
        </fieldset>
      </form>
    </>
  );
}

export default MailForm;
