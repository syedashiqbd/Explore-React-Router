import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div className="container">
      <h1>My Website</h1>
      <Header></Header>
      <h2>Home Page</h2>
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Home;
