import { ListGroup, Card, Badge } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from '../../css/cart.module.css';
import { DeleteIcon } from '../ui/Icons';
const style = {
  borderBottom: '1px solid #eee',
  marginBottom: '2rem',
};
const CartItem = (props) => {
  const dispatch = useDispatch();

  const totalPrice = `$${props.totalPrice.toFixed(2)}`;

  const addItemToCartHandler = () => {
    dispatch(
      cartActions.addToCart({
        id: props.id,
        amount: 1,
      })
    );
  };
  const removeItemFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  const deleteWholeItemHandler = () => {
    dispatch(cartActions.removeCartItem(props.id));
  };
  return (
    <ListGroup horizontal style={style} className={classes.group}>
      <ListGroup.Item
        className={`${classes['list-item']} ${classes['cart-item-desc']}`}
      >
        <div>
          <img
            src={`../images/${props.image}.jpg`}
            className={classes['cart-item-image']}
            alt='cartItemImg'
          />
        </div>
      </ListGroup.Item>
      <ListGroup.Item className={classes['cart-item-about']}>
        <div>
          <h5 className={classes['cart-item-name']}>{props.name} </h5>
          <div className={classes.remove}>
            <p className={classes['cart-item-info']}>{props.desc}</p>
          </div>
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        className={`${classes['list-item']} ${classes['cart-item-qty']}`}
      >
        <button
          className={classes['cart-amount-control']}
          onClick={addItemToCartHandler}
        >
          +
        </button>

        <Badge className={classes['cart-item-number']} bg='secondary'>
          {props.amount}
        </Badge>

        <button
          className={classes['cart-amount-control']}
          onClick={removeItemFromCartHandler}
        >
          -
        </button>
      </ListGroup.Item>
      <ListGroup.Item
        className={`${classes['list-item']} ${classes['cart-item-price']}`}
      >
        <h4>
          <Badge bg='warning'> {totalPrice}</Badge>
        </h4>
      </ListGroup.Item>
      <ListGroup.Item
        className={`${classes['list-item']} ${classes['cart-item-actions']}`}
      >
        <Card.Link href='#' onClick={deleteWholeItemHandler}>
          <DeleteIcon />
        </Card.Link>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CartItem;
