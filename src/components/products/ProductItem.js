import Classes from '../../css/products.module.css';
import Rating from '../ui/Rating';
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const { id, image, price, reviews, name } = props;

  return (
    <div className='col-lg-3 col-md-6'>
      <div className={`card ${Classes.item}`}>
        <Link to={`/home/${id}`} className={Classes.image}>
          <img
            className='card-img-top'
            src={`../images/${image}.jpg`}
            alt='itemImg'
          />
        </Link>
        <div className='card-body'>
          <Link to={`/home/${id}`} className={Classes.title}>
            <span>{name}</span>
          </Link>
          <div className={Classes.rating}>
            <span className={Classes['rating-stars']}>
              <Rating />
            </span>
            <span className={Classes.review}>{reviews} review</span>
          </div>
          <div className={Classes.price}>
            <span>
              <h4>
                <Badge bg='success'>${price}</Badge>
              </h4>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
