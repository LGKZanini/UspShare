import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';
import { Home } from './pages/home';

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <Home />
    </>  
  );
}

export default App;
