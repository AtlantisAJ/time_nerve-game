import Player from './components/Player/Player.jsx';
import TimerChallenge from './components/TimerChallenge/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Not Easy" targetTime={5}/>
        <TimerChallenge title="Getting tough" targetTime={10}/>
        <TimerChallenge title="Pros only" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
