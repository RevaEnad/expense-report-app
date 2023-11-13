import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main';
import { useServiceAuthContext } from './hooks/context/AuthServiceContext';
import Homepage from './components/Homepage';

const Routing = () => {
    const { isLoggedIn } = useServiceAuthContext();

  return (
    <Router>
      {isLoggedIn ? <Homepage /> : <Main /> }
    </Router>
  );
};

export default Routing;
