import { useState } from "react";
import Total from "./components/Total";
import NavBar from "./components/NavBar";
import Packages from "./components/Packages";

function App() {
  const [boxState, setboxState] = useState([]);
  const BoxClick = (event) => {
    setboxState(event);
  };
  const [outState, setoutState] = useState([]);
  const OutClick = (event) => {
    setoutState(event);
  };
  const [deckState, setdeckState] = useState([]);
  const DeckClick = (event) => {
    setdeckState(event);
  };
  const [starState, setstarState] = useState([]);
  const StarClick = (event) => {
    setstarState(event);
  };
  const [dState, setdState] = useState([]);
  const DClick = (event) => {
    setdState(event);
  };
  const [hourState, sethourState] = useState([]);
  const HourClick = (event) => {
    sethourState(event);
  };
  return (
    <>
      <NavBar />
      <div className="flex-col bg-gradient-to-r from-gray-300 to-emerald-600 font-serif">
        <Packages
          OnBox={BoxClick}
          boxtotal={boxState}
          OnOut={OutClick}
          outtotal={outState}
          OnDeck={DeckClick}
          decktotal={deckState}
          OnStar={StarClick}
          startotal={starState}
          OnD={DClick}
          dtotal={dState}
          OnHour={HourClick}
          hourtotal={hourState}
        />
        <Total
          total={
            Number(boxState) +
            Number(outState) +
            Number(deckState) +
            Number(starState) +
            Number(dState) +
            Number(hourState)
          }
        />
      </div>
    </>
  );
}

export default App;
