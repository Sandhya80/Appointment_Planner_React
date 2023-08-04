import React from "react";
import PropTypes from 'prop-types'

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type= 'text' 
        name= 'name' value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder= 'Contact Name' required />        
      </label>

      <label>
        <input type= 'tel'
          name= 'phone' value={phone}
          onChange={(e) => setPhone(e.target.value)}
          pattern= '[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
          placeholder= 'Contact Phone (###-###-####)' required />
      </label>

      <label>
        <input type= 'email'
          name= 'email' value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder= 'Email id'
        />

      </label>

      <label>
        <input type= 'submit'
          value= 'Add Contact' />
      </label>

    </form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired
}