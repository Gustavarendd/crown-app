import { useState, FormEvent, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  SignInContainer,
  Header,
  ButtonsContainer,
} from './sign-in-form.styles';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/user.action';
import { AuthError, AuthErrorCodes } from 'firebase/auth';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const signInWithGoogle = async () => {
    dispatch(googleSignInStart());
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(emailSignInStart(email, password));
      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.INVALID_PASSWORD) {
        alert('Email or Password is wrong!');
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <Header>Already have an account</Header>
      <span>Sign in with your email and password:</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          type={'email'}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type={'password'}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Sign in</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
