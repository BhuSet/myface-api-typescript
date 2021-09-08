import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { UserDetails } from './component/UserDetails';
import { PostList } from './component/PostList';
import { Header } from './component/Header';

function App() {
  return (
  <main>
    <Router>
      <Header />

      <hr />
    
      <Switch>
        <Route path="/posts">
          <PostList/>
        </Route>
        <Route path = "/users/:userId">
          <UserDetails/>
        </Route>
      </Switch>
    </Router>
  </main>
  );
}



export default App;
