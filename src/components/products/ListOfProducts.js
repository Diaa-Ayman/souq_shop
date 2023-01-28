import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "../../css/products.module.css";
const Products = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className={`container-fluid ${classes.products}`}>
      <h3>OUR LATEST PRODUCTS</h3>
      <ul className="row" style={{ margin: "1rem 0 2rem 0" }}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            reviews={product.numReviews}
            image={product.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
