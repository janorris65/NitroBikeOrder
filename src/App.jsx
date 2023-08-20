import { useState } from "react";
import Total from "./components/Total";
import NavBar from "./components/NavBar";
import PackComponent from "./components/PackComponent";
import ChocolateMilk from "../assets/ChocolateMilk.jpg";

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

  return (
    <>
      <NavBar />
      <div className="flex-col bg-gradient-to-r from-gray-300 to-emerald-600 font-serif">
        <Total
          total={
            Number(boxState) +
            Number(outState) +
            Number(deckState) +
            Number(starState) +
            Number(dState)
          }
        />
        <div className="m-4 mx-auto max-w-md overflow-hidden rounded border-4 border-gray-600 bg-emerald-300 shadow-2xl">
          <h2>Packages</h2>
          <PackComponent
            OnPack={BoxClick}
            packtotal={boxState}
            Starbuckspic={ChocolateMilk}
            PriceA={529.63}
            PriceB={1059.15}
            title="Box Seats"
            description="Enjoy the best of the experience. Rich Nitro Cold Brew, Cold
            Frappuccinos, and Refreshing Lemonades"
          />
          <PackComponent
            OnPack={OutClick}
            packtotal={outState}
            Starbuckspic={ChocolateMilk}
            PriceA={511.58}
            PriceB={1005.02}
            title="Outfield"
            description="Enjoy the excitement to front row big events with Iced Cold Brew,
            Frappuccinos, and Select Lemonades"
          />
          <PackComponent
            OnPack={DeckClick}
            packtotal={deckState}
            Starbuckspic={ChocolateMilk}
            PriceA={481.67}
            PriceB={846.12}
            title="Upper Deck"
            description="Take it all in! Enjoy Rich Iced Cold Brew and Sweet Lemonades"
          />
          <PackComponent
            OnPack={StarClick}
            packtotal={starState}
            Starbuckspic={ChocolateMilk}
            PriceA={444.78}
            PriceB={802.99}
            title="All Star Break"
            description="Sit back and relax! Enjoy Refreshing Lemonades and Cold Frappuccinos"
          />
          <PackComponent
            OnPack={DClick}
            packtotal={dState}
            Starbuckspic={ChocolateMilk}
            PriceA={356.58}
            PriceB={580.75}
            title="Designated Hitter"
            description="Classic Clutch Performance. Rich Nitro Cold Brew and Refreshing
            Lemonades"
          />
        </div>
      </div>
    </>
  );
}

export default App;
