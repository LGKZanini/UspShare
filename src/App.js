import React from 'react';

import { Header } from './components/header/header';
import { Body } from './components/body/body';
import { Label } from './components/label/label'

function App() {
  return (
    <>
      <Header />
      <Body>
        <Label />
      </Body>
    </>
  );
}

export default App;
