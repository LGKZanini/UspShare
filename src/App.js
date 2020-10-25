import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';
import { Home } from './pages/home';
import { AvaliacaoProfs } from './pages/avaliacao-profs'
import { MaterialApoio } from './pages/material-apoio'
import { MinhasDisciplinas } from './pages/minhas-disciplinas'

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <MinhasDisciplinas />
    </>
  );
}

export default App;
