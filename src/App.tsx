import React from 'react'

// cmp
import Navbar from './components/layout/Navbar'
import Search from './components/users/Search'

// style
import './App.scss'

interface Props {
  
}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Search />
    </div>
  )
}

export default App
