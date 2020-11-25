import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Pedido from './pages/Pedido';
import RealizeUmSonho from './pages/RealizeUmSonho';
import Confirmar from './pages/Confirmar';

import 'dotenv/config';

import "./app.css";

function App() {
  return <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Pedido}/>
        <Route exact path="/realizeUmSonho" component={RealizeUmSonho}/>
        <Route exact path="/confirmar" component={Confirmar}/>
      </Switch>
    </Router>
  </div>;
}

export default App;
