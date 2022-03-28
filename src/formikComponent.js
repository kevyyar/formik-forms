import { Formik, Form, Field, ErrorMessage } from "formik";
import CheckBox from "./components/Checkbox";
import TextInput from './components/TextInput';
import Select from './components/Select';

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
  } else if (!values.accept) {
    errors.accept = "You must accept the terms and conditions";
  } else if (!values.select) {
    errors.select = "You must select a value";
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
        accept: false,
        select: "",
      }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <TextInput name="firstName" label="First Name" />
        <br />
        <TextInput name="lastName" label="Last Name" />
        <br />
        <TextInput name="email" label="Email" />
        <br />
        <Select name="select" label="Fav JS Framework">
          <option value="">---Select JS Framework---</option>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">VueJS</option>
        </Select>
        <CheckBox name="accept">
          Accept Terms & Conditions
        </CheckBox>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}

export default FormikComponent;
