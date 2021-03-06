import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import Form from "./components/Form"; 
import './App.css';

const initialTeam = [
  {id: uuid(), fname: 'John', lname: 'Smith', email: 'jsmith@gmail.com', role: 'Senior Engineer'},
  {id: uuid(), fname: 'Jane', lname: 'Doe', email: 'jdoe@gmail.com', role: 'Senior UI/UX Engineer'},
];

function App() {
  const [team, setTeam] = useState(initialTeam);

  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  });

  const onInputChange = event => {
    const inputThatChanged = event.target.name;
    const newValueForInput = event.target.value; 
    setFormValues({
      ...formValues, 
      [inputThatChanged]: newValueForInput,
    });
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    };
    setTeam([ ...team, newTeamMember ]);
  };

  return (
    <div className="App">
      <Form 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />

      <h3>Team Members:</h3>
      {team.map(member => 
        <div key={member.id}>
          <h3>{member.fname} {member.lname}</h3>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      )}
    </div>
  );
}

export default App;
