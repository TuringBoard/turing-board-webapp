import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Credentials/SignUp';
import Throttle from './Throttle/Throttle';
import { AuthContextProvider } from './store/auth-context';
import Dashboard from './Dashboard/Dashboard';
import Settings from './Settings/Settings';
import NotFound from './NotFound/NotFound';
import Desktop from './Desktop/Desktop';

function App() {
  const width = window.innerWidth;
  return (
    <AuthContextProvider>
      <Switch>
        <Route path='/' exact>
          {width < 400 ? localStorage.getItem('uid') !== null ? <Redirect to="/dashboard" /> : <LandingPage /> : <Desktop />}
        </Route>
        <Route path='/signup' exact>
          {width < 400 ? <SignUp /> : <Desktop />}
        </Route>
        <Route path='/dashboard' exact>
          {width < 400 ? localStorage.getItem('uid') !== null ? <Dashboard /> : <Redirect to='/' /> : <Desktop />}
        </Route>
        <Route path='/throttle' exact>
          {width < 400 ? localStorage.getItem('uid') !== null ? <Throttle /> : <Redirect to='/' /> : <Desktop />}
        </Route>
        <Route path='/settings' exact>
          {width < 400 ? localStorage.getItem('uid') !== null ? <Settings /> : <Redirect to='/' /> : <Desktop />}
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
