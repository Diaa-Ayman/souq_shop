import CartItem from './CartItem';
import { Card, Container, Col, Row, Button, Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import classes from '../../css/cart.module.css';
import { Link } from 'react-router-dom';
const CartList = () => {
  const [totalQuantityPrice, setTotalQuantityPrice] = useState(0);
  const items = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const tQP = `$${totalQuantityPrice.toFixed(2)}`;
  useEffect(() => {
    setTotalQuantityPrice(0);
    items.map((item) =>
      setTotalQuantityPrice((prev) => prev + item.totalPrice)
    );
  }, [items]);

  const isEmpty = items.length === 0;

  let content = '';

  if (isEmpty) {
    content = (
      <div className={`centered ${classes.empty}`}>
        <h3>YOUR SHOPPING CART IS EMPTY</h3>
        <Link to='/'>
          <button className='btn btn-lg btn-outline-dark'>Go Back</button>
        </Link>
      </div>
    );
  } else {
    content = (
      <div className={classes['cart-list']}>
        <h3>Your Shopping Cart:</h3>
        <Container>
          <Row>
            <Col lg='9'>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  desc={item.desc}
                  amount={item.amount}
                  totalPrice={item.totalPrice}
                  image={item.image}
                />
              ))}
            </Col>
            <Col lg='2'>
              <Card className={classes['order-card']}>
                <Card.Body>
                  <Card.Title>
                    Total Quantity:
                    <Badge bg='secondary'>{totalQuantity}</Badge>
                  </Card.Title>
                  <hr></hr>
                  <Card.Title>
                    Total Price:
                    <Badge bg='secondary'> {tQP}</Badge>
                  </Card.Title>
                  <hr></hr>
                  <Link to={isLoggedIn ? '/checkout' : '/signin'}>
                    <Button variant='primary'>Proceed To Chekout</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default CartList;
