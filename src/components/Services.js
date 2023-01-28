// UNUSED COMPONENT..
import { Link } from 'react-router-dom';
import img1 from '../assets/bgImg.png';
import img2 from '../assets/camera.png';
import classes from '../css/Services.module.css';
const Services = () => {
  return (
    <div className={`${classes.services}`}>
      <div className='row'>
        <h1 className='col-lg-5'>With Us You Will Find What You Want...</h1>
        <img src={img1} alt='img' className='col-lg-6' />
      </div>
      <div className={`row ${classes.second}`}>
        <img src={img2} alt='img' className='col-lg-6' />
        <div className={`${classes.special} col-lg-5`}>
          <h1>Join and Enjoy</h1>
          <Link to='/signup'>
            <button className='btn btn-outline-light btn-lg'>JOIN NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
