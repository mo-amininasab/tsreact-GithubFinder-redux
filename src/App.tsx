import React from 'react';
import { Route, Switch } from 'react-router';

// cmp
import Navbar from './components/layout/Navbar';

// page
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

// style
import './App.scss';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/user/:login" exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
