import { Button, Form } from 'react-bootstrap';
import useHttp from '../hooks/use-http';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signupURL } from './Secret';
const URL = signupURL;
const Signup = () => {
  const history = useHistory();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [invaild, setInvalid] = useState(null);

  const { sendRequest } = useHttp();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredEmailIsInvalid = !enteredEmail.includes('@');

    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordIsInvalid = enteredPassword.length < 6;

    if (enteredEmailIsInvalid || enteredPasswordIsInvalid) {
      setInvalid('Email or Password Is Invalid!');
      return;
    }

    sendRequest({
      url: URL,
      method: 'POST',
      data: {
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      },
    });

    history.push('/signin');
  };
  return (
    <Form onSubmit={submitFormHandler} className='aForm'>
      <h3 style={{ color: '#fff' }}>Sign Up</h3>
      <hr></hr>
      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' placeholder='Name' ref={nameInputRef} />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          ref={emailInputRef}
        />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          ref={passwordInputRef}
        />
      </Form.Group>

      <p style={{ color: 'red' }}>{invaild}</p>

      <Button variant='primary' type='submit'>
        Sign up
      </Button>
    </Form>
  );
};
export default Signup;
