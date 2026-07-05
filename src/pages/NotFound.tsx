import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-500 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;