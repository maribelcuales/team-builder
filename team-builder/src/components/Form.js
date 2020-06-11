import React from "react";

function Form(props) {
  return (
    <form>
      <label>First Name
        <input
          onChange={onInputChange}
          value={formValues.fname}
          name='fname'
          type='text'
        />
      </label><br />

      <label>Last Name
        <input
          onChange={onInputChange}
          value={formValues.lname}
          name='lname'
          type='text'
        />
      </label><br />

      <label>Email
        <input
          onChange={onInputChange}
          value={formValues.email}
          name='email'
          type='text'
        />
      </label><br />

      <label>Role
        <input
          onChange={onInputChange}
          value={formValues.role}
          name='role'
          type='text'
        />
      </label><br />
    </form>
  )
};

export default Form;