import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "../../css/products.module.css";
import { Fragment } from "react";
import CheckoutCard from "./CheckoutCard";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useHistory } from "react-router-dom";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const products = useSelector((state) => state.products.products);
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  console.log(product);

  const submitFormHandler = (event) => {
    event.preventDefault();

    dispatch(
      cartActions.addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        desc: product.desc,
        amount: 1,
        countInStock: product.stock,
        image: product.image,
      })
    );
    history.push("/my-cart");
  };

  if (!product) {
    return (
      <div className="centered">
        <Spinner
          animation="border"
          variant="success"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
    );
  }

  return (
    <Fragment>
      <div
        className={`card mb-3 ${classes.details} centered`}
        style={{ maxWidth: "95%", height: "550", margin: "2rem" }}
      >
        <div className="row g-0">
          <div className="col-lg-5">
            <img
              src={`../images/${product.image}.jpg`}
              className={`${classes["details-img"]} img-fluid rounded-start`}
              alt="IMG"
            />
          </div>
          <div className="col-lg-3">
            <div className="card-body">
              <h6 className="card-title card-text">{product.name}</h6>
              <hr></hr>
              <p className={`card-text ${classes.price}`}>${product.price}</p>
              <hr></hr>
              <p className="card-text">
                <small className="text-muted">{product.desc}</small>
              </p>
            </div>
            <button
              className={`btn btn-lg btn-light ${classes["rev-btn"]}`}
              onClick={submitFormHandler}
            >
              Add To Cart
            </button>
          </div>
          <CheckoutCard product={product} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetails;
