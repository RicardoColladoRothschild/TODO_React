import React from 'react';


import './App.css';
import { MainComponent } from './MainComponent';
import { SubComponent } from './SubComponent';
import { TodoCounter } from './TodoCounter';


function App() {
  return (
      <React.Fragment>
         <TodoCounter completed = {16} total = {25}/>

         <MainComponent>
          <SubComponent/>
          

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
