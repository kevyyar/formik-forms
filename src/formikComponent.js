import { Formik } from "formik";

// validate form
const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Must be 3 characters or more";
  } else if (!/^[a-zA-Z]+$/.test(values.firstName)) {
    errors.firstName = "Must be a valid name";
  } else if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 15) {
    errors.lastName = "Must be 15 characters or less";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Must be 3 characters or more";
  } else if (!/^[a-zA-Z]+$/.test(values.lastName)) {
    errors.lastName = "Must be a valid name";
  } else if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

function FormikComponent() {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <label>First Name</label>
          <input type="text" {...formik.getFieldProps("firstName")} />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
          <br />
          <label>Last Name</label>
          <input type="text" {...formik.getFieldProps("lastName")} />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
          <br />
          <label>Email</label>
          <input type="email" {...formik.getFieldProps("email")} />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </Formik>
  );
}

export default FormikComponent;
