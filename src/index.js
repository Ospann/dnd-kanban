import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import KanbanStore from './store/index';
export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
 

root.render(
  <Context.Provider value={{
    kanban : new KanbanStore(),
  }}> 
    <App />
    </Context.Provider>
);

