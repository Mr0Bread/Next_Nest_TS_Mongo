import SignInForm from 'Components/SignIn';

export default function SignIn() {
  return (
	<div className="h-screen bg-blue-50">
	  <h1 className="mx-auto w-min text-8xl text-blue-400 pt-10" >
		Reagento
	  </h1>
	  <SignInForm />
	</div>
  );
}
