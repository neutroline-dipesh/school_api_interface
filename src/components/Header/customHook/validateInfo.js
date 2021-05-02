export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  } else if (values.username.length <= 3) {
    errors.username = "invalid username!";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "invalid password!";
  }
  return errors;
}
