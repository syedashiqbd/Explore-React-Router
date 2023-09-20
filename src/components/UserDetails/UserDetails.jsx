import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, username, address, company } = userDetails;
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
      <h3>{company.name}</h3>
    </div>
  );
};

export default UserDetails;
