import classes from '../css/footer.module.css';
import { useLocation } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, WhatsAppIcon } from './ui/Icons';
const Footer = () => {
  const location = useLocation();

  const fixFooter = location.pathname === '/' || location.pathname === '/home';
  const footerClasses = !fixFooter
    ? `${classes.footer} ${classes.fix}`
    : classes.footer;

  return (
    <footer className={footerClasses}>
      <div className={classes.copyrights}>
        <span>
          2022 Copyrights © <span className={classes.owner}>DIAA AYMAN</span>
        </span>
      </div>
      <div className={classes['social-icons']}>
        <FacebookIcon />
        <TwitterIcon />
        <WhatsAppIcon />
      </div>
    </footer>
  );
};
export default Footer;
