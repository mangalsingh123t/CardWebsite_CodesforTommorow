import image from '../assets/imageman.jpg';

const Card = ({ post, onRemove }) => {
  return (
    // <div className="bg-gray-300 p-4">
      <div className="border rounded-lg p-4 relative shadow-md bg-white mb-4 max-w-md mx-auto">
        <h2 className="text-lg font-bold mb-2">{post.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{post.body}</p>
        <div className="flex items-center justify-center mb-2">
          <img
            src={image}
            alt="My Icon"
            className="object-cover rounded-lg"
            style={{ width: '100%', maxHeight: '250px' }}
          />
        </div>
        <button
          onClick={() => onRemove(post.id)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800"
        >
          X
        </button>
      </div>
    // </div>
  );
};

export default Card;
