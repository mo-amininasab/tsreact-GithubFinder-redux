import React from 'react'

// cmp
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'
import Users from './components/users/Users'

// style
import './App.scss'

interface Props {
  
}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Users />
    </div>
  )
}

export default App
