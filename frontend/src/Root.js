import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Root = () => {
    return (
      <Router>
        <Switch>
          <Route path="/create" component={CadButton} />
        </Switch>
      </Router>
    );
  };
  
  export default Root;