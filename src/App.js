import React from 'react';

import { Header } from './components/header/header';
import { BodyContainer } from './components/body/style';
import { Label } from './components/label/label'
import { SearchBar } from './components/search-box/search-box';

function App() {
  return (
    <>
      <Header inicio={10}/>
      <BodyContainer>
        <SearchBar />
        <Label />=
      </BodyContainer>
    </>
  );
}

export default App;
