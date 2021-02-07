import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './routes/Home';
import Link from './routes/Link';

const App = () => (
  <Router>
    <Switch>
      <Route path="/r/:linkId">
        <Link />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
