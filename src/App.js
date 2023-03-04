import './App.css';
import MenuAppBar from './components/Appbar';
import Board from './modules/Kanban';

function App() {
  return (
    <div className="App">
      <MenuAppBar />
      <Board />
    </div>
  );
}

export default App;
