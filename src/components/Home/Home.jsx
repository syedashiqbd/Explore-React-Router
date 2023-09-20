import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  const navigation = useNavigation();
  let location = useLocation();
  return (
    <div className="container">
      <h1>My Website</h1>
      <Header></Header>
      <div
        style={{
          background: 'black',
          color: 'white',
          marginTop: '15px',
          borderRadius: '5px',
          paddingLeft: '15px',
        }}
      >
        {location.pathname === '/' ? '' : location.pathname}
      </div>

      {navigation.state === 'loading' ? (
        <h1 style={{ textAlign: 'center' }}>Loading....</h1>
      ) : (
        <Outlet></Outlet>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
