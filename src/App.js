import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from 'formik'

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
	initialValues: {
		email: '',
		password: ''
	},
	onSubmit: values => {
		console.log('form:', values)
	},
	validate: values => {
		let errors = {};
		if (!values.email) errors.email = "Field required"
		if (!values.password) errors.password = "Field required"
		
		//should add an error message if the username is not an email.
		if (values.email && !values.email.includes("@")) errors.email = "Username should be an email"

		return errors;
	}
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
	  	<div>Email</div>
		<input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
		{formik.errors.email ? <div id="emailError" style={{color:"red"}}>{formik.errors.email}</div>: null}
		
		<div>Password</div>
		<input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
		{formik.errors.password ? <div id="pswError" style={{color:"red"}}>{formik.errors.password}</div>: null}

		<button id="submitBtn" type="submit">Submit</button>
	  </form>
    </div>
  );
}

export default App;
