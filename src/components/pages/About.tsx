import React from 'react';

// style
import './About.scss';

interface Props {}

const About: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <p>Version: 1.0.0</p>
    </div>
  );
};

export default About;
