import { useState } from 'react';
import Form from 'Components/Form';
import Field from 'Components/Field';
import MainLayout from 'Components/MainLayout';
import useHttp from 'Hooks/Http';

export default function SignIn() {
  const [data, setData] = useState({
    login: '',
    password: ''
  });
  const { request } = useHttp();

  const onSubmit = (e) => {
    e.preventDefault();
    request({
      url: 'http://localhost:5000/auth/signIn',
      body: JSON.stringify(data),
      method: 'POST'
    }).then((res) => console.log(res));
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

  return (
    <MainLayout>
      <Form onSubmit={ onSubmit }>
        <Field
          id="login"
          name="login"
          type="text"
          onChange={ handleInputChange }
          label="Login"
        />
        <Field
          id="password"
          name="password"
          type="password"
          onChange={ handleInputChange }
          label="Password"
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
