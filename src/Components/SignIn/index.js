import { SignInContainer, BtnContainer } from "./SignIn.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "../FormInput";
import Button from "./../Button/index";
import {
  emailSignInStart,
  googleSignInStart,
} from "./../../Store/User/user.action";

//------------------------------ The Code ------------------------------

const defaultFormFields = { email: "", password: "" };

const SignIn = () => {
  const [formFields, setDefaultFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const dispatch = useDispatch();

  // Handle input fields change
  const handleChange = ({ target }) => {
    const { id, value } = target;
    setDefaultFormFields({ ...formFields, [id]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      setDefaultFormFields(defaultFormFields);
    } catch (e) {
      if (e.code === "auth/wrong-password" || e.code === "auth/user-not-found")
        alert("Incorrect Email or Password");
    }
  };

  // Signing-in with Google-Popup
  const googleUser = async () => {
    dispatch(googleSignInStart());
  };

  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          id="email"
          value={email}
          onChange={handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
        <BtnContainer>
          <Button type="submit">SIGN IN</Button>
          <Button type="button" onClick={googleUser} btnType="google">
            GOOGLE SIGN IN
          </Button>
        </BtnContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
