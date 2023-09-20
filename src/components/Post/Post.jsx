/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="user">
      <h2>Id: {id}</h2>
      <p>Title: {title}</p>
      <Link to={`/postDetails/${id}`}>Show More....</Link>
    </div>
  );
};

export default Post;
