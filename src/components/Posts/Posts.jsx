import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="users" style={{ marginTop: '20px' }}>
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default Posts;
