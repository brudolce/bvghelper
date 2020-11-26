import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/Home/Home';
import Info from './views/Info/Info';
import Result from './views/Results/Results';


const App: React.FC = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
        <Route exact path="/results" component={Result} />
      </Switch>
    </div>
  );
};

export default App;
