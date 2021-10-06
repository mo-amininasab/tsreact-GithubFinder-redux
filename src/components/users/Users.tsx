import React from 'react'

// redux
import { useTypedSelector } from '../../hooks/useTypedSelector';

// cmp
import UserItem from './UserItem'

// style
import './Users.scss'

interface Props {
  
}

const Users: React.FC<Props> = (props) => {
  const users = useTypedSelector(state => state.githubReducer.data.items);

  return (
    <div className="users">
      {users.map(user => <UserItem key={user.id} user={user}/>)}
    </div>
  )
}

export default Users
