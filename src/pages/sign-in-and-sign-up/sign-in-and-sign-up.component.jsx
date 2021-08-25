import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import './sign-in-and-sign-up.style.scss';




class SignInAndSignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="sign-in-and-sign-up">
      <SignIn />
      </div>
    
    );
  }
}
export default SignInAndSignUp;