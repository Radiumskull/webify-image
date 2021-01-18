import React from 'react';
import { Layout, Nav } from './components/styled/layout';
import { Link, Switch, Route, Redirect} from 'react-router-dom'
import Home from './containers/Home';
import Amrutam from './containers/Amrutam';

function App() {
  return (
    <Layout>
      <Nav>
        <h1>Webify Image</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/amrutam">Amrutam</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </Nav> 
      <main>
        <Switch>
          <Route path="/amrutam" exact component={Amrutam}/>
          <Route path="/" exact component={Home}/>
          <Route render={() => <Redirect to="/"/>}/>
        </Switch>
      </main>
      <footer>Pawnation</footer>
    </Layout>
  );
}

export default App;
