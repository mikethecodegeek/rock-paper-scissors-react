import './App.scss';
import Game from './Components/Game/Game';
import Rulesbtn from './Components/Rules/Rulesbtn';
import Scoreboard from './Components/Scoreboard/Scoreboard';

function App() {
  return (
    <div className="App">
      {/* <Scoreboard /> */}
      <Game />
      <Rulesbtn />
    </div>
  );
}

export default App;
