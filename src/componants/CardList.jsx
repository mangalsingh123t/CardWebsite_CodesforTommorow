import Card from './Card';

const CardList = ({ posts, onRemove }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map(post => (
        <Card key={post.id} post={post} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default CardList;
