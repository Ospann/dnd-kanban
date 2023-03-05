import './App.css';
import MenuAppBar from './components/Appbar';
import Filters from './modules/Filters';
import Board from './modules/Kanban';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Filters />
      <Board />
    </div>
  );
}

export default App;
