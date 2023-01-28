import { Button, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useRef, useState } from 'react';
import useHttp from '../hooks/use-http';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth-slice';
import { SigninURL } from './Secret';
const URL = SigninURL;
const Signin = () => {
  const [invaild, setInvalid] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitFormHandler = (event) => {
    const enteredEmail = emailInputRef.current.value;
    const enteredEmailIsInvalid = !enteredEmail.includes('@');
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordIsInvalid = enteredPassword.length < 6;

    event.preventDefault();

    if (enteredEmailIsInvalid || enteredPasswordIsInvalid) {
      setInvalid('Email or Password Is Invalid!');
      return;
    }

    const getData = (data) => {
      dispatch(authActions.addToken(data.idToken));
    };
    sendRequest(
      {
        url: URL,
        method: 'POST',
        data: {
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        },
      },
      getData
    );
    history.push('/home');
  };

  return (
    <Form onSubmit={submitFormHandler} className='aForm'>
      <h3 style={{ color: '#fff' }}>Sign In</h3>
      <hr></hr>
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
      {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
        <Form.Check type='checkbox' label='Check me out' />
      </Form.Group> */}
      <Button variant='primary' type='submit'>
        Sign In
      </Button>
      <div>
        <Form.Text className=''>
          New Client? <Link to='/signup'>Register</Link>
        </Form.Text>
      </div>
    </Form>
  );
};
export default Signin;
