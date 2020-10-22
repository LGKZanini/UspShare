import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';
import { Home } from './pages/home';
import { AvaliacaoProfs } from './pages/avaliacao-profs'

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <AvaliacaoProfs />
    </>
  );
}

export default App;
