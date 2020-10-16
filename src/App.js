import React from 'react';

import { CreateGlobalStyle } from './fonts/global-fonts';

import { Header } from './components/header/header';
import { BodyContainer } from './components/body/style';
import { Label } from './components/label/label'
import { SearchBar } from './components/search-box/search-box';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <>
      <CreateGlobalStyle/>
      <Header/>
      <BodyContainer>
        <SearchBar />
        <Label />
        <Footer />
      </BodyContainer>
    </>  
  );
}

export default App;
