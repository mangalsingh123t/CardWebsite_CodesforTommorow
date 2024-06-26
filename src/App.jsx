import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from './features/posts/postsApi';
import { setPage } from './features/posts/postsSlice';
import CardList from './componants/CardList';
import Pagination from './componants/Pagination';
import Loading from './componants/Loading';
import './App.css'


const App = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.posts.page);
  const { data: posts, error, isLoading } = useGetPostsQuery();

  const [visiblePosts, setVisiblePosts] = useState([]);
  const postsPerPage = 6;

  useEffect(() => {
    if (posts) {
      const startIndex = (page - 1) * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      setVisiblePosts(posts.slice(startIndex, endIndex));
    }
  }, [page, posts]);

  const handleRemove = (id) => {
    const newPosts = visiblePosts.filter(post => post.id !== id);
    setVisiblePosts(newPosts);
  };

  if (isLoading) return <Loading />;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <CardList posts={visiblePosts} onRemove={handleRemove} />
      <Pagination 
        page={page} 
        setPage={(page) => dispatch(setPage(page))} 
        totalPages={Math.ceil(posts.length / postsPerPage)} 
      />
    </div>
  );
};

export default App;
