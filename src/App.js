import React from 'react';

import { Header } from './components/header/header';
import { BodyContainer } from './components/body/style';
import { Label } from './components/label/label'
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <Header />
      <BodyContainer>
        <Label />
        <Footer />
      </BodyContainer>
    </>
  );
}

export default App;
