import { BrowserRouter as Router } from 'react-router-dom';

import Main from './components/Main';
import { useServiceAuthContext } from './hooks/context/AuthServiceContext';
import Homepage from './components/Homepage';
import { ExpenseContextProvider } from './hooks/context/ExpenseContext';

const Routing = () => {
    const { isLoggedIn } = useServiceAuthContext();

  return (
    <Router>
      {isLoggedIn ?(
        <ExpenseContextProvider>
          <Homepage />
        </ExpenseContextProvider>
      ): <Main /> }
    </Router>
  );
};

export default Routing;
