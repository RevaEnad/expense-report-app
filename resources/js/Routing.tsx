import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main';
import { useServiceAuthContext } from './hooks/context/AuthServiceContext';
import RoutingContainer from './components/RoutingContainer';

const Routing = () => {
    const { isLoggedIn } = useServiceAuthContext();

  return (
    <Router>
      {isLoggedIn ? <RoutingContainer/> : <Main />}
    </Router>
  );
};

export default Routing;
