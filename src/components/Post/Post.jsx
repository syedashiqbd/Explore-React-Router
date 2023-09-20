/* eslint-disable react/prop-types */

import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate(`/postDetails/${id}`);
  };

  return (
    <div className="user">
      <h2>Id:Post ID: {id}</h2>
      <p>Title: {title}</p>
      <Link to={`/postDetails/${id}`}>Show More....</Link>
      <button onClick={handleDetails}>Details</button>
    </div>
  );
};

export default Post;
