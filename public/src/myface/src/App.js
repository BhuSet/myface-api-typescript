import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { UserDetails } from './component/UserDetails';
import { PostList } from './component/PostList';

function App() {
  return (
  <main>
    <Router>
      <MyFace to="/" label="Posts" />
      <MyFace to="/users/1" label="Home" />

      <hr />

      <Switch>
        <Route exact path="/">
          <PostList/>
        </Route>
        <Route path="/users/1">
          <UserDetails/>
        </Route>
      </Switch>
    </Router>
  </main>
  );
}


function MyFace({ label, to}) {
  

  return (
    <div >
      <Link to={to}>{label}</Link>
    </div>
  );
}
export default App;
