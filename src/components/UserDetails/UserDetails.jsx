import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const { name, username, address } = useLoaderData();
  const { city, street, zipcode } = address;
  return (
    <div
      className="user"
      style={{
        background: 'yellowgreen',
      }}
    >
      <h1>{name}</h1>
      <h3>UserName: {username}</h3>
      <h3>Address :</h3>
      <p>{city}</p>
      <p>{street}</p>
      <p>{zipcode}</p>
    </div>
  );
};

export default UserDetails;
