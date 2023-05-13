const Validation = (values) => {
  let error = {};
  const email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const password_pattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  if (values.email === "") {
    error.email = "Email is required";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email is poorly written";
  }

  if (values.password === "") {
    error.password = "Password is required";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "Password must have an uppercase, lowercase, one digit, a special character and minimum of length of 8 characters";
  }


  return error;
};

export default Validation;
