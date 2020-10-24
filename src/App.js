import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';
import { Home } from './pages/home';
import { AvaliacaoProfs } from './pages/avaliacao-profs'
import { MaterialApoio } from './pages/material-apoio'

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <MaterialApoio />
    </>
  );
}

export default App;
