import React, { useEffect } from 'react'

// cmp
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'

// redux
import { useTypedSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { actionCreators } from './redux/index';

// style
import './App.scss'

interface Props {
  
}

const App: React.FC<Props> = () => {
  const data = useTypedSelector(state => state.githubReducer);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(actionCreators.searchUsers('hello'));
    
  // }, [])

  return (
    <div>
      <Navbar />
      <Search />
    </div>
  )
}

export default App
