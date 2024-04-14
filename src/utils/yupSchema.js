import * as Yup from "yup";

export const contactusSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Email format is not valid try eg : someone@gmail.com"
    ),
  subject: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Subject must be required!"),
  message: Yup.string()
    .min(5, "Message must be 5 characters")
    .max(300, "Message must not be greater then 300 characters")
    .required("Please enter how can we help you!"),
});
