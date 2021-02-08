import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from './routes/HomePage';
import LinkPage from './routes/LinkPage';

const App = () => (
  <Router>
    <Switch>
      <Route path="/r/:linkId">
        <LinkPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  </Router>
);

export default App;
