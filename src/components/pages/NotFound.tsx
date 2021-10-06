import React from 'react';

// style
import './NotFound.scss';

interface Props {}

const NotFound: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;
