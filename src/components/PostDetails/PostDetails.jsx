import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const { id, title, body } = useLoaderData();
  return (
    <div className="user">
      <h1>{id}</h1>
      <p style={{ color: 'blue' }}>{title}</p>
      <p style={{ color: 'brown' }}>{body}</p>
    </div>
  );
};

export default PostDetails;
