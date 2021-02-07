import { useState } from 'react';
import Form from 'Components/Form';
import Field from 'Components/Field';
import MainLayout from 'Components/MainLayout';
import useHttp from 'Hooks/Http';

export default function SignUp() {
  const { request } = useHttp();

  const [data, setData] = useState({
    login: '',
    password: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    request(
      {
        url: `${process.env.NEXT_PUBLIC_API_URI}/auth/signUp`,
        body: JSON.stringify(data),
        method: 'POST'
      }
    )
      .then((res) => console.log(res));
  };

  const handleInputChange = (e) => {
    const {
      target: {
        value,
        name
      }
    } = e;

    setData((prevState) => {
      prevState[name] = value;
      return prevState;
    });
  };

  const renderAfterLogin = () => (
    <div>
      Login should contain at least 6 characters
    </div>
  );

  const renderAfterPassword = () => (
    <div>
      Password should contain at least 8 characters, at least one number, one uppercase and
      lowercase letter
    </div>
  );

  return (
    <MainLayout>
      <Form onSubmit={ onSubmit }>
        <Field
          id="login"
          name="login"
          type="text"
          label="Login"
          minLength={ 6 }
          maxLength={ 48 }
          onChange={ handleInputChange }
          required
          renderAfter={ renderAfterLogin() }
          autocomplete="off"
        />
        <Field
          id="password"
          name="password"
          type="password"
          label="Password"
          minLength={ 8 }
          maxLength={ 32 }
          onChange={ handleInputChange }
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          renderAfter={ renderAfterPassword() }
          autocomplete="off"
        />
        <Field
          id="submit"
          name="submit"
          type="submit"
          onChange={ () => null }
        />
      </Form>
    </MainLayout>
  );
}
