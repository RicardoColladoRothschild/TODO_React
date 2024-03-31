import React from 'react';
import { TodoProvider } from '../TodoContext/TodoContext.js';
import './App.css';
import { AppUI } from './AppUI.js';
function App() {
  
 
 return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
      
    
  );
}
export default App;
