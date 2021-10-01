import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import SignUp from './Credentials/SignUp';
import Throttle from './Throttle/Throttle';
import { AuthContextProvider } from './store/auth-context';

function App() {
  return (
    <AuthContextProvider>
      <Switch>
        <Route path='/' exact>
          <LandingPage />
        </Route>
        <Route path='/signup' exact>
          <SignUp />
        </Route>
        <Route path='/throttle' exact>
          <Throttle />
        </Route>
      </Switch>
    </AuthContextProvider>
  );
}

export default App;
