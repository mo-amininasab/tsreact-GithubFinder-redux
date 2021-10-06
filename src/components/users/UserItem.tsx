import React from 'react';
import { Link } from 'react-router-dom';

// redux
import { User } from '../../redux/index';

// style
import './UserItem.scss';

interface Props {
  user: User;
}

const UserItem: React.FC<Props> = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="Avatar" />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="link">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
