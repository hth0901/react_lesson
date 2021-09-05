import { Formik, Form } from "formik";
import React from "react";
import { Button } from "semantic-ui-react";
import MyTextInput from "../../app/common/form/MyTextInput";
// import { Form } from "semantic-ui-react";

const LoginForm = function () {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => {
        <Form className="ui form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput name="email" placeholder="Email" />
          <MyTextInput name="password" placeholder="Password" />
          <Button positive content="Login" type="submit" fluid />
        </Form>;
      }}
    </Formik>
  );
};

export default LoginForm;
