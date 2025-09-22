import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/authSlice.js';


const Header = () => {
  const dispatch = useDispatch();
   const isLogin = useSelector((state)=> state.auth.isAutenticated);
   const logoutHangler = ()=> {
    dispatch(authAction.logout());
   }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLogin && 
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHangler}>Logout</button>
          </li>
        </ul>
      </nav>
      }
    </header>
  );
};

export default Header;
