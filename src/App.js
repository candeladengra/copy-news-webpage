import './App.css';
import Landing from './Pantallas/landing'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router basename='/'>
          <Switch>
            <Route path='/login' component={Landing} />
            <Route path='/login2' component={null} />
            <Redirect to='/login' />
          </Switch>
        </Router> 
    </div>
  );
}

export default App;
