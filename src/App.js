import { useSelector } from 'react-redux';
import { Fragment } from 'react/jsx-runtime';
import Counter from './components/Counter';
import Header from './/components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile'


function App() {
  const isLogin = useSelector((state)=> state.auth.isAutenticated);
  return (
    <>
    <Fragment>
      <Header />
      {!isLogin &&  <Auth />}
      {isLogin &&  <UserProfile />}
    </Fragment>
    <Counter />
    </>
  );
}

export default App;
