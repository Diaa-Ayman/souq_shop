import mouse from '../assets/mouse.png';
import phone from '../assets/phone.png';
import playstation from '../assets/playstation.png';
import airpods from '../assets/airpods.png';
import alexa from '../assets/alexa.png';
import camera from '../assets/camera.png';
import classes from '../css/gallery.module.css';
const Gallery = () => {
  return (
    <div className={classes.down}>
      <div className={classes.hBody}>
        <span className={classes.sp1}>
          <img src={phone} alt='img' />
        </span>
        <span className={classes.sp2}>
          <img src={playstation} alt='img' />
        </span>
        <span className={classes.sp3}>
          <img src={camera} alt='img' />
        </span>
        <span className={classes.sp4}>
          <img src={airpods} alt='img' />
        </span>
        <span className={classes.sp5}>
          <img src={alexa} alt='img' />
        </span>
        <span className={classes.sp6}>
          <img src={mouse} alt='img' />
        </span>
      </div>
    </div>
  );
};

export default Gallery;
