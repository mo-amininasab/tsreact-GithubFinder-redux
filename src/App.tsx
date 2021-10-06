import React from 'react'

// cmp
import Navbar from './components/layout/Navbar'

// style
import './App.scss'

interface Props {
  
}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
