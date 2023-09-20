import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { id, title, body } = useLoaderData();
  const navigate = useNavigate();

  const handlGoback = () => {
    navigate(-1);
  };

  return (
    <div className="user">
      <h1>{id}</h1>
      <p style={{ color: 'blue' }}>{title}</p>
      <p style={{ color: 'brown' }}>{body}</p>
      <button onClick={handlGoback}>Go back</button>
    </div>
  );
};

export default PostDetails;
