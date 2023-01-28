import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { ShoppingCartIcon } from './ui/Icons';
import classes from '../css/header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutIcon, PersonIcon } from './ui/Icons';
import { authActions } from '../store/auth-slice';
const MyNav = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const userButton = isLoggedIn ? (
    <span>
      Logout <LogoutIcon />
    </span>
  ) : (
    <span>
      <PersonIcon /> Sign In
    </span>
  );
  const logoutHandler = () => {
    if (!isLoggedIn) {
      return;
    }
    dispatch(authActions.removeToken());
    console.log(isLoggedIn);
  };
  return (
    <div className={classes.style}>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand>
            <NavLink to='/' className={classes.brand}>
              <span className='logo'>SUQSHOP</span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            className='custom-toggler'
          />
          <Navbar.Collapse
            id='basic-navbar-nav'
            className='justify-content-end'
          >
            <Nav>
              <Nav.Link href='#home'>
                <NavLink
                  to='/my-cart'
                  activeClassName={classes.activeBtn}
                  className={`btn ${classes['cart-btn']}`}
                >
                  <ShoppingCartIcon />
                  Your Cart
                </NavLink>
              </Nav.Link>
              <Nav.Link href='#link'>
                <NavLink
                  to='/signin'
                  className={`btn ${classes['auth-btn']}`}
                  activeClassName={classes.activeBtn}
                  onClick={logoutHandler}
                >
                  {userButton}
                </NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default MyNav;
