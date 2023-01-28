import { Fragment } from 'react';
import Gallery from '../components/Gallery';
import ListOfProducts from '../components/products/ListOfProducts';
import Services from '../components/Services';
const HomeScreen = () => {
  return (
    <Fragment>
      <Gallery />
      <Services />
      <ListOfProducts />
    </Fragment>
  );
};

export default HomeScreen;
