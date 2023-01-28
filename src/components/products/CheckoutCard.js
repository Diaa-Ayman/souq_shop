import classes from '../../css/products.module.css';

const CheckoutCard = (props) => {
  const { product } = props;

  return (
    <div
      className={`card col-lg-4 ${classes.checkout}`}
      style={{ maxWidth: '15rem' }}
    >
      <div className='card-header'>
        <h5>Check-Out</h5>
        <hr></hr>
      </div>
      <ul className='list-group list-group-flush'>
        <li className={`${classes['list-group-item']}`}>
          Price: ${product.price}
        </li>
        <li className={`${classes['list-group-item']}`}>
          Status in Stock: {product.stock}{' '}
        </li>
      </ul>
    </div>
  );
};

export default CheckoutCard;
