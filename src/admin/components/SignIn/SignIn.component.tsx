import Form from 'Components/Form';
import Field from 'Components/Field';
import { useState } from 'react';

export default function SignInComponent() {
  const LOGIN = 'login';
  const PASSWORD = 'password';
  const [loginData, setLoginData] = useState({ [LOGIN]: '', [PASSWORD]: '' });

  const onSubmit = (e) => {
	e.preventDefault();
	console.log(loginData);
  };

  const onChange = (e) => {
	const {
	  target: {
		value,
		name
	  }
	} = e;

	setLoginData(
	  (prevState) => {
		prevState[name] = value;
		return prevState;
	  }
	);
  };

  return (
	<div className="mx-auto max-w-xs pt-40">
	  <Form onSubmit={ onSubmit }>
		<Field
		  onChange={ onChange }
		  id={ LOGIN }
		  name={ LOGIN }
		  type="text"
		  autocomplete="off"
		  fieldClassName="w-full rounded text-base"
		/>
		<Field
		  onChange={ onChange }
		  id={ PASSWORD }
		  name={ PASSWORD }
		  type="password"
		  autocomplete="off"
		  fieldClassName="w-full mt-6 rounded text-base"
		/>
		<Field
		  onChange={ onChange }
		  id="submit"
		  name="submit"
		  type="submit"
		  wrapperClassName="flex mt-6 justify-center rounded bg-blue-400 hover:bg-blue-500 transition-colors"
		  fieldClassName="w-full text-base"
		/>
	  </Form>
	</div>
  );
}
