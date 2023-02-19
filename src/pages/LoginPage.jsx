import React from "react";

import { Avatar, Container, Typography } from "@mui/material";
import { FaLock } from "react-icons/fa";
import { signUpSchema } from "../components/signUpSchema";
import SignUpForm from "../components/SignUpForm";
import { Formik } from "formik";

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: "10rem", textAlign: "center" }}>
      <Avatar
        sx={{
          backgroundColor: "primary.main",
          m: "auto",
          width: 60,
          height: 60,
        }}
        sizes="100px"
      >
        <FaLock size="40" />
      </Avatar>
      <Typography variant="h4" align="center" mb={4} color="primary.dark">
        Login
      </Typography>
      <Formik
        initialValues={{ fullname: "", email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          alert(
            `fullName: ${values.fullName} email: ${values.email} password: ${values.password}`
          );
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <SignUpForm {...props} />}
      ></Formik>
    </Container>
  );
};

export default LoginPage;
