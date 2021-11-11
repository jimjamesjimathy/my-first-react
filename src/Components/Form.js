import React from "react";
import '../App.css'
const Form = (props) => {

  const { change, submit, errors } = props;
  const { first_name, last_name, email, password, tos } = props.values;

  const onChange = (event) => {
    const {name, value, checked, type } = event.target;
    const checkValue = type === 'checkbox' ? checked : value;
    change(name, checkValue);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  }

  return(
    <div className='container'>
      <div className='inputs-text-wrap'>
        <h1>Welcome to JimmyBook!</h1>
        <h3>Fill out the required forms below.</h3>
      </div>
      <p>{errors.first_name}</p>
      <p>{errors.last_name}</p>
      <p>{errors.email}</p>
      <p>{errors.password}</p>
      <p>{errors.tos}</p>
      <form onSubmit={onSubmit} className='form-flex'>
        <label><p>First Name:</p>
          <input 
            type='text'
            name='first_name'
            required='required'
            value={first_name}
            onChange={onChange}
          />
          <br />
        </label>

        <label><p>Last Name:</p>
          <input 
            type='text'
            name='last_name'
            required='required'
            value={last_name}
            onChange={onChange}
          />
          <br />
        </label>

        <label><p>Email:</p>
          <input 
            type='email'
            name='email'
            required='required'
            value={email}
            onChange={onChange}
          />
          <br />
          </label>

        <label><p>Password:</p>
          <input 
            type='password'
            name='password'
            required='required'
            value={password}
            onChange={onChange}
          />
          <br />
        </label>

        <label>
          <p>Terms Of Service:</p>
          <input 
            type='checkbox'
            name='tos'
            required='required'
            checked={tos}
            onChange={onChange}
          />
          <br />
        </label>

        <input type='submit' value='Add new User!' name='form-submit'/>
      </form>
    </div>

  )
}

export default Form;