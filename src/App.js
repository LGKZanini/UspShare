import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';
import { Home } from './pages/home';
import { Registrar } from './pages/registrar';
import { Entrar } from './pages/entrar';
import { AvaliacaoProfs } from './pages/avaliacao-profs';
import { MaterialApoio } from './pages/material-apoio';
import { MinhasDisciplinas } from './pages/minhas-disciplinas'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <Router>
        <Routes/> 
      </Router>
    </>  
  );
}

function Routes() {
  let location = useLocation();
  let  registrar = location.state && location.state.registrar;
  let  entrar = location.state && location.state.entrar;
  return (
      <div>
          <Switch location={ registrar || entrar || location }>
              <Route exact path="/" component={Home} />
              <Route path="/avaliacao-profs" component={AvaliacaoProfs} />
              <Route path="/material-apoio" component={MaterialApoio} />
              <Route path="/minhas-disciplinas" component={MinhasDisciplinas} />
          </Switch>
          {entrar && <Route path="/entrar" children={<Entrar/>} />}
          {registrar && <Route path="/registrar" children={<Registrar/>} />}

      </div>
  );
}

export default App;
