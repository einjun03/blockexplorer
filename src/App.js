import BlockDetails from './components/BlockDetails';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Transactions from './components/Transactions'
import AddressDetails from './components/AddressDetails';
import TransactionDetails from './components/TransactionDetails';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/block/:id" component={BlockDetails} />
        <Route exact path="/block/:id/transactions" component={Transactions} />
        <Route exact path="/address/:address" component={AddressDetails} />
        <Route exact path="/transaction/:txnHash" component={TransactionDetails} />
      </Switch>
    </BrowserRouter>
  );
}



export default App;
