import React from "react";
import { withFormik, Form, Field } from 'formik';
import Axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Please login below:</p>

      <Form>
        <Field
          type='text'
          name='username'
          placeholder='username'
        />
        <Field
          type='text'
          name='password'
          placeholder='password'
        />
        <button type='submit'>Login</button>
      </Form>

    </>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },

  handleSubmit(values, { props }) {
    console.log(values)
    Axios
    .post('http://localhost:5000/api/login', values)
        .then(res => {
          console.log(res)
          localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log(err))
  }
})(Login);

export default LoginFormik;
