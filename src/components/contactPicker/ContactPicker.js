import React from "react";
import PropTypes from 'prop-types'

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange} id='contactList'>
      <option value={''} key={-1}> Appointment with </option>
        {contacts.map((contact, index) => {
          return (
            <option key={index} value={contact}> Contact </option>
          )
        })}        
    </select>
  );
};

ContactPicker.propTypes = {
  name: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}