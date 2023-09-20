/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './User.css';
const User = ({ user }) => {
  const { id, name, email, phone, website } = user;
  return (
    <div className="user">
      <h2> {name}</h2>
      <h3>{email}</h3>
      <h3>{phone.split(' ')[0]}</h3>
      <h3>{website}</h3>
      <Link to={`/userDetails/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
