import React from 'react'
import {Formik, Form, Field} from "formik"

export default function FormComp() {
    return (
      <div>
      <div className='contactMain'>Contact Me</div>
        <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
      {() => (
        <Form>
          <label htmlFor="name">Name: </label>
          <Field name="name" className='nameField' />
    
          <label htmlFor="email">Email: </label>
          <Field name="email" />
    
          <label htmlFor="message">Message: </label>
          <Field name="message" component="textarea"/>
    
          <button type="submit">Send</button>
        </Form>
      )}
      </Formik>
      </div>
    )
}
