import PropTypes from "prop-types"; // Importe PropTypes
import { useState } from "react";

import "./MyForms.css";

const MyForms = ({ UserName, UserEmail }) => {
  const [name, setName] = useState(UserName);
  const [email, setEmail] = useState(UserEmail);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("")
    setName("")
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            required
            onChange={(e) => setName(e.target.value)}
            value={name || ""}
          />
        </div>
        <label>
          <span>E-Mail</span>
          <input
            type="text"
            name="email"
            placeholder="Digite seu e-mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email || ""}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

MyForms.propTypes = {
  UserName: PropTypes.string.isRequired, 
  UserEmail: PropTypes.string.isRequired,
};

export default MyForms;
