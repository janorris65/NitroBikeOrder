import { useState } from "react";
import Footer from "./components/Footer";
import Hardwaredetails from "./components/HardwareDetails";
import Coffee from "./components/Coffee";
import Frappuccino from "./components/Frappuccino";
import Syrup from "./components/Syrup";
import Creams from "./components/Creams";
import Lemonade from "./components/Lemonade";
import Tea from "./components/Tea";
import Total from "./components/Total";
import NavBar from "./components/NavBar";
import Packages from "./components/Packages";

function App() {
  const [coffeeState, setCoffee] = useState([]);
  const coffeeClick = (event) => {
    setCoffee(event);
  };
  const [frapState, setFrap] = useState([]);
  const frapClick = (event) => {
    setFrap(event);
  };
  const [syrupState, setSyrup] = useState([]);
  const syrupClick = (event) => {
    setSyrup(event);
  };
  const [creamState, setCreams] = useState([]);
  const creamClick = (event) => {
    setCreams(event);
  };
  const [lemonadeState, setLemonade] = useState([]);
  const lemonadeClick = (event) => {
    setLemonade(event);
  };
  const [teaState, setTea] = useState([]);
  const teaClick = (event) => {
    setTea(event);
  };
  const [hardwareState, setHardware] = useState([]);
  const hardwareClick = (event) => {
    setHardware(event);
  };
  const [totalState, setTotal] = useState({
    statecoffee: 0,
    statefrap: 0,
    statesyrup: 0,
    statecream: 0,
    statelemonade: 0,
    statetea: 0,
    statehardware: 0,
  });
  const totalClick = (event) => {
    setTotal(event);
  };
  // const [runningTotal, setrunningTotalState] = useState([]);
  // const setrunningTotal = (event) => {
  //   setrunningTotalState(
  //     totalState.statecoffee +
  //       totalState.statefrap +
  //       totalState.statesyrup +
  //       totalState.statecream +
  //       totalState.statelemonade +
  //       totalState.statetea +
  //       totalState.statehardware
  //   );
  //   console.log(totalState);
  //   console.log(runningTotal);
  // };
  return (
    <>
      <NavBar />
      <div className="flex-col bg-gradient-to-r from-gray-300 to-emerald-600 font-serif">
        {/* <Coffee
          onClick={coffeeClick}
          tonClick={totalClick}
          subtotal={coffeeState}
        />
        <Frappuccino
          onClick={frapClick}
          tonClick={totalClick}
          subtotal={frapState}
        />
        <Syrup
          onClick={syrupClick}
          tonClick={totalClick}
          subtotal={syrupState}
        />
        <Creams
          onClick={creamClick}
          tonClick={totalClick}
          subtotal={creamState}
        />
        <Lemonade
          onClick={lemonadeClick}
          tonClick={totalClick}
          subtotal={lemonadeState}
        />
        <Tea onClick={teaClick} tonClick={totalClick} subtotal={teaState} />
        <Hardwaredetails
          onClick={hardwareClick}
          tonClick={totalClick}
          subtotal={hardwareState}
        /> */}
        <Packages />
        <Total
          total={
            Number(coffeeState) +
            Number(frapState) +
            Number(syrupState) +
            Number(creamState) +
            Number(lemonadeState) +
            Number(teaState) +
            Number(hardwareState)
          }
        />
      </div>
    </>
  );
}

export default App;
