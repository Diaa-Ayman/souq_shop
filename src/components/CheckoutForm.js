import { Form, Button, Spinner } from 'react-bootstrap';
import { useRef, useState } from 'react';
import useHttp from '../hooks/use-http';
import { useSelector } from 'react-redux';
import { URL } from './Secret';

const url = `${URL}/order.json`;
const CheckoutForm = () => {
  const cartData = useSelector((state) => state.cart.items);
  const addressInpuRef = useRef();
  const phoneInputRef = useRef();
  const postalInputRef = useRef();
  const [invalid, setInvalid] = useState(null);
  const { sendRequest } = useHttp();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const enteredAddress = addressInpuRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;

    if (
      enteredAddress.length < 1 ||
      enteredPhone.length < 1 ||
      enteredPostalCode.length < 1
    ) {
      setInvalid('Please Entere valid Information');
      return;
    }

    if (cartData.length < 1) {
      setInvalid('YOUR CART IS EMPTY. PLEASE ADD SOME PURCHASES!');
      return;
    }
    setIsSubmitting(true);
    sendRequest({
      url: url,
      method: 'POST',
      data: {
        Address: enteredAddress,
        Phone: enteredPhone,
        PostalCode: enteredPostalCode,
        order: cartData,
      },
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  let content = null;
  if (!submitted && isSubmitting && content === null) {
    content = <Spinner animation='border' className='centered' />;
  }
  if (submitted) {
    content = (
      <div className='centered' style={{ color: '#fff' }}>
        <h5>YOUR DATA IS SENT SUCCESSFULLY!</h5>
        <h3>You will recieve the order after 5 days from now.</h3>
      </div>
    );
  }
  if (!submitted && !isSubmitting) {
    content = (
      <Form onSubmit={submitFormHandler} className='aForm'>
        <h3 style={{ color: '#fff' }}>Where to send!</h3>
        <hr></hr>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Address'
            ref={addressInpuRef}
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type='tel' placeholder='phone' ref={phoneInputRef} />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='number'
            placeholder='Postal Code'
            ref={postalInputRef}
          />
        </Form.Group>
        <p style={{ color: 'red' }}>{invalid}</p>
        <Button variant='primary' type='submit'>
          Send Info
        </Button>
      </Form>
    );
  }
  return content;
};

export default CheckoutForm;
