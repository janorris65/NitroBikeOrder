import PropTypes from "prop-types";
import ChocolateMilk from "../../assets/IMG_5845.jpg";
export default function Packages({
  OnBox,
  OnOut,
  OnDeck,
  OnStar,
  OnD,
  boxtotal,
  outtotal,
  decktotal,
  startotal,
  dtotal,
}) {
  const onClicks = (event) => {
    event.preventDefault();
    if (
      event.target.BoxTwoten.checked &&
      !event.target.BoxTwentythirty.checked &&
      !event.target.BoxSixtyeighty.checked
    ) {
      OnBox(Number(event.target.numBoxTwo.value * 100));
    } else if (
      !event.target.BoxTwoten.checked &&
      event.target.BoxTwentythirty.checked &&
      !event.target.BoxSixtyeighty.checked
    ) {
      OnBox(Number(event.target.numBoxTwenty.value * 200));
    } else if (
      !event.target.BoxTwoten.checked &&
      !event.target.BoxTwentythirty.checked &&
      event.target.BoxSixtyeighty.checked
    ) {
      OnBox(Number(event.target.numBoxSixty.value * 300));
    } else if (
      event.target.BoxTwoten.checked &&
      event.target.BoxTwentythirty.checked &&
      !event.target.BoxSixtyeighty.checked
    ) {
      OnBox(
        Number(event.target.numBoxTwo.value * 100) +
          Number(event.target.numBoxTwenty.value * 200)
      );
    } else if (
      !event.target.BoxTwoten.checked &&
      event.target.BoxTwentythirty.checked &&
      event.target.BoxSixtyeighty.checked
    ) {
      OnBox(
        Number(event.target.numBoxTwenty.value * 200) +
          Number(event.target.numBoxSixty.value * 300)
      );
    } else if (
      event.target.BoxTwoten.checked &&
      !event.target.BoxTwentythirty.checked &&
      event.target.BoxSixtyeighty.checked
    ) {
      OnBox(
        Number(event.target.numBoxSixty.value * 300) +
          Number(event.target.numBoxTwo.value * 100)
      );
    } else if (
      event.target.BoxTwoten.checked &&
      event.target.BoxTwentythirty.checked &&
      event.target.BoxSixtyeighty.checked
    ) {
      OnBox(
        Number(event.target.numBoxSixty.value * 300) +
          Number(event.target.numBoxTwo.value * 100) +
          Number(event.target.numBoxTwenty.value * 200)
      );
    }
    if (
      event.target.OutTwoten.checked &&
      !event.target.OutTwentythirty.checked &&
      !event.target.OutSixtyeighty.checked
    ) {
      OnOut(Number(event.target.numOutTwo.value * 100));
    } else if (
      !event.target.OutTwoten.checked &&
      event.target.OutTwentythirty.checked &&
      !event.target.OutSixtyeighty.checked
    ) {
      OnOut(Number(event.target.numOutTwenty.value * 200));
    } else if (
      !event.target.OutTwoten.checked &&
      !event.target.OutTwentythirty.checked &&
      event.target.OutSixtyeighty.checked
    ) {
      OnOut(Number(event.target.numOutSixty.value * 300));
    } else if (
      event.target.OutTwoten.checked &&
      event.target.OutTwentythirty.checked &&
      !event.target.OutSixtyeighty.checked
    ) {
      OnOut(
        Number(event.target.numOutTwo.value * 100) +
          Number(event.target.numOutTwenty.value * 200)
      );
    } else if (
      !event.target.OutTwoten.checked &&
      event.target.OutTwentythirty.checked &&
      event.target.OutSixtyeighty.checked
    ) {
      OnOut(
        Number(event.target.numOutTwenty.value * 200) +
          Number(event.target.numOutSixty.value * 300)
      );
    } else if (
      event.target.OutTwoten.checked &&
      !event.target.OutTwentythirty.checked &&
      event.target.OutSixtyeighty.checked
    ) {
      OnOut(
        Number(event.target.numOutSixty.value * 300) +
          Number(event.target.numOutTwo.value * 100)
      );
    } else if (
      event.target.OutTwoten.checked &&
      event.target.OutTwentythirty.checked &&
      event.target.OutSixtyeighty.checked
    ) {
      OnOut(
        Number(event.target.numOutSixty.value * 300) +
          Number(event.target.numOutTwo.value * 100) +
          Number(event.target.numOutTwenty.value * 200)
      );
    }
    if (
      event.target.DeckTwoten.checked &&
      !event.target.DeckTwentythirty.checked &&
      !event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(Number(event.target.numDeckTwo.value * 100));
    } else if (
      !event.target.DeckTwoten.checked &&
      event.target.DeckTwentythirty.checked &&
      !event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(Number(event.target.numDeckTwenty.value * 200));
    } else if (
      !event.target.DeckTwoten.checked &&
      !event.target.DeckTwentythirty.checked &&
      event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(Number(event.target.numDeckSixty.value * 300));
    } else if (
      event.target.DeckTwoten.checked &&
      event.target.DeckTwentythirty.checked &&
      !event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(
        Number(event.target.numDeckTwo.value * 100) +
          Number(event.target.numDeckTwenty.value * 200)
      );
    } else if (
      !event.target.DeckTwoten.checked &&
      event.target.DeckTwentythirty.checked &&
      event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(
        Number(event.target.numDeckTwenty.value * 200) +
          Number(event.target.numDeckSixty.value * 300)
      );
    } else if (
      event.target.DeckTwoten.checked &&
      !event.target.DeckTwentythirty.checked &&
      event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(
        Number(event.target.numDeckSixty.value * 300) +
          Number(event.target.numDeckTwo.value * 100)
      );
    } else if (
      event.target.DeckTwoten.checked &&
      event.target.DeckTwentythirty.checked &&
      event.target.DeckSixtyeighty.checked
    ) {
      OnDeck(
        Number(event.target.numDeckSixty.value * 300) +
          Number(event.target.numDeckTwo.value * 100) +
          Number(event.target.numDeckTwenty.value * 200)
      );
    }
    if (
      event.target.AllTwoten.checked &&
      !event.target.AllTwentythirty.checked &&
      !event.target.AllSixtyeighty.checked
    ) {
      OnStar(Number(event.target.numAllTwo.value * 100));
    } else if (
      !event.target.AllTwoten.checked &&
      event.target.AllTwentythirty.checked &&
      !event.target.AllSixtyeighty.checked
    ) {
      OnStar(Number(event.target.numAllTwenty.value * 200));
    } else if (
      !event.target.AllTwoten.checked &&
      !event.target.AllTwentythirty.checked &&
      event.target.AllSixtyeighty.checked
    ) {
      OnStar(Number(event.target.numAllSixty.value * 300));
    } else if (
      event.target.AllTwoten.checked &&
      event.target.AllTwentythirty.checked &&
      !event.target.AllSixtyeighty.checked
    ) {
      OnStar(
        Number(event.target.numAllTwo.value * 100) +
          Number(event.target.numAllTwenty.value * 200)
      );
    } else if (
      !event.target.AllTwoten.checked &&
      event.target.AllTwentythirty.checked &&
      event.target.AllSixtyeighty.checked
    ) {
      OnStar(
        Number(event.target.numAllTwenty.value * 200) +
          Number(event.target.numAllSixty.value * 300)
      );
    } else if (
      event.target.AllTwoten.checked &&
      !event.target.AllTwentythirty.checked &&
      event.target.AllSixtyeighty.checked
    ) {
      OnStar(
        Number(event.target.numAllSixty.value * 300) +
          Number(event.target.numAllTwo.value * 100)
      );
    } else if (
      event.target.AllTwoten.checked &&
      event.target.AllTwentythirty.checked &&
      event.target.AllSixtyeighty.checked
    ) {
      OnStar(
        Number(event.target.numAllSixty.value * 300) +
          Number(event.target.numAllTwo.value * 100) +
          Number(event.target.numAllTwenty.value * 200)
      );
    }
    if (
      event.target.HitTwoten.checked &&
      !event.target.HitTwentythirty.checked &&
      !event.target.HitSixtyeighty.checked
    ) {
      OnD(Number(event.target.numHitTwo.value * 100));
    } else if (
      !event.target.HitTwoten.checked &&
      event.target.HitTwentythirty.checked &&
      !event.target.HitSixtyeighty.checked
    ) {
      OnD(Number(event.target.numHitTwenty.value * 200));
    } else if (
      !event.target.HitTwoten.checked &&
      !event.target.HitTwentythirty.checked &&
      event.target.HitSixtyeighty.checked
    ) {
      OnD(Number(event.target.numHitSixty.value * 300));
    } else if (
      event.target.HitTwoten.checked &&
      event.target.HitTwentythirty.checked &&
      !event.target.HitSixtyeighty.checked
    ) {
      OnD(
        Number(event.target.numHitTwo.value * 100) +
          Number(event.target.numHitTwenty.value * 200)
      );
    } else if (
      !event.target.HitTwoten.checked &&
      event.target.HitTwentythirty.checked &&
      event.target.HitSixtyeighty.checked
    ) {
      OnD(
        Number(event.target.numHitTwenty.value * 200) +
          Number(event.target.numHitSixty.value * 300)
      );
    } else if (
      event.target.HitTwoten.checked &&
      !event.target.HitTwentythirty.checked &&
      event.target.HitSixtyeighty.checked
    ) {
      OnD(
        Number(event.target.numHitSixty.value * 300) +
          Number(event.target.numHitTwo.value * 100)
      );
    } else if (
      event.target.HitTwoten.checked &&
      event.target.HitTwentythirty.checked &&
      event.target.HitSixtyeighty.checked
    ) {
      OnD(
        Number(event.target.numHitSixty.value * 300) +
          Number(event.target.numHitTwo.value * 100) +
          Number(event.target.numHitTwenty.value * 200)
      );
    }
  };
  return (
    <div className="m-4 mx-auto max-w-md overflow-hidden rounded border-4 border-gray-600 bg-emerald-300 shadow-2xl">
      <h2>Packages</h2>
      <form onSubmit={onClicks}>
        <div className="m-4 mx-auto max-w-sm flex-col overflow-hidden rounded bg-slate-300 text-center shadow-2xl">
          <h3>Box Seats</h3>
          <img src={ChocolateMilk} alt="Pic of Nitros, Fraps, Lemonades"></img>
          <p>
            Enjoy the best of the experience. Rich Nitro Cold Brew, Cold
            Frappuccinos, and Refreshing Lemonades
          </p>
          <div className="flex justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="BoxTwoten"
              name="BoxTwoten"
              value="BoxTwoten"
            />
            <label className=" self-center" htmlFor="BoxTwoten">
              2 - 10
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numBoxTwo"
              name="numBoxTwo"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numBoxTwo">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="BoxTwentythirty"
              name="BoxTwentythirty"
              value="BoxTwentythirty"
            />
            <label className=" self-center" htmlFor="BoxTwentythirty">
              20-30
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numBoxTwenty"
              name="numBoxTwenty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numBoxTwenty">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="BoxSixtyeighty"
              name="BoxSixtyeighty"
              value="BoxSixtyeighty"
            />
            <label className=" self-center" htmlFor="BoxSixtyeighty">
              60-80
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numBoxSixty"
              name="numBoxSixty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numBoxSixty">
              # Packages
            </label>
          </div>
          <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
            <h2>subtotal: {boxtotal}</h2>
          </div>
        </div>
        <div className="m-4 mx-auto max-w-sm flex-col overflow-hidden rounded bg-slate-300 text-center shadow-2xl">
          <h3>Outfield</h3>
          <img
            src={ChocolateMilk}
            alt="Pic of Iced Cold Brews, Fraps, Lemonades"
          ></img>
          <p>
            Enjoy the excitement to front row big events with Iced Cold Brew,
            Frappuccinos, and Select Lemonades
          </p>
          <div className="flex  justify-evenly self-center">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="OutTwoten"
              name="OutTwoten"
              value="OutTwoten"
            />
            <label className=" self-center" htmlFor="OutTwoten">
              2 - 10
            </label>
            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numOutTwo"
              name="numOutTwo"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numOutTwo">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="OutTwentythirty"
              name="OutTwentythirty"
              value="OutTwentythirty"
            />
            <label className=" self-center" htmlFor="OutTwentythirty">
              20-30
            </label>
            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numOutTwenty"
              name="numOutTwenty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numOutTwenty">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="OutSixtyeighty"
              name="OutSixtyeighty"
              value="OutSixtyeighty"
            />
            <label className=" self-center" htmlFor="OutSixtyeighty">
              60-80
            </label>
            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numOutSixty"
              name="numOutSixty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numOutSixty">
              # Packages
            </label>
          </div>
          <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
            <h2>subtotal: {outtotal}</h2>
          </div>
        </div>
        <div className="m-4 mx-auto max-w-sm flex-col overflow-hidden rounded bg-slate-300 text-center shadow-2xl">
          <h3>Upper Deck</h3>
          <img
            src={ChocolateMilk}
            alt="Pic of Iced Cold Brews and Lemonades"
          ></img>
          <p>Take it all in! Enjoy Rich Iced Cold Brew and Sweet Lemonades</p>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="DeckTwoten"
              name="DeckTwoten"
              value="DeckTwoten"
            />
            <label className=" self-center" htmlFor="DeckTwoten">
              2 - 10
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numDeckTwo"
              name="numDeckTwo"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numDeckTwo">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="DeckTwentythirty"
              name="DeckTwentythirty"
              value="DeckTwentythirty"
            />
            <label className=" self-center" htmlFor="DeckTwentythirty">
              20-30
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numDeckTwenty"
              name="numDeckTwenty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numDeckTwenty">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="DeckSixtyeighty"
              name="DeckSixtyeighty"
              value="DeckSixtyeighty"
            />
            <label className=" self-center" htmlFor="DeckSixtyeighty">
              60-80
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numDeckSixty"
              name="numDeckSixty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numDeckSixty">
              # Packages
            </label>
          </div>
          <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
            <h2>subtotal: {decktotal}</h2>
          </div>
        </div>
        <div className="m-4 mx-auto max-w-sm flex-col overflow-hidden rounded bg-slate-300 text-center shadow-2xl">
          <h3>All Star Break</h3>
          <img src={ChocolateMilk} alt="Pic of Fraps and Lemonades"></img>
          <p>
            Sit back and relax! Enjoy Refreshing Lemonades and Cold Frappuccinos
          </p>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="AllTwoten"
              name="AllTwoten"
              value="AllTwoten"
            />
            <label className=" self-center" htmlFor="AllTwoten">
              2 - 10
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numAllTwo"
              name="numAllTwo"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numAllTwo">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="AllTwentythirty"
              name="AllTwentythirty"
              value="AllTwentythirty"
            />
            <label className=" self-center" htmlFor="AllTwentythirty">
              20-30
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numAllTwenty"
              name="numAllTwenty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numAllTwenty">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="AllSixtyeighty"
              name="AllSixtyeighty"
              value="AllSixtyeighty"
            />
            <label className=" self-center" htmlFor="AllSixtyeighty">
              60-80
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numAllSixty"
              name="numAllSixty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numAllSixty">
              # Packages
            </label>
          </div>
          <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
            <h2>subtotal: {startotal}</h2>
          </div>
        </div>
        <div className="m-4 mx-auto max-w-sm flex-col overflow-hidden rounded bg-slate-300 text-center shadow-2xl">
          <h3>Designated Hitter</h3>
          <img src={ChocolateMilk} alt="Pic of Nitros, Lemonades"></img>
          <p>
            Classic Clutch Performance. Rich Nitro Cold Brew and Refreshing
            Lemonades
          </p>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="HitTwoten"
              name="HitTwoten"
              value="HitTwoten"
            />
            <label className=" self-center" htmlFor="HitTwoten">
              2 - 10
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numHitTwo"
              name="numHitTwo"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numHitTwo">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="HitTwentythirty"
              name="HitTwentythirty"
              value="HitTwentythirty"
            />
            <label className=" self-center" htmlFor="HitTwentythirty">
              20-30
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numHitTwenty"
              name="numHitTwenty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numHitTwenty">
              # Packages
            </label>
          </div>
          <div className="flex  justify-evenly">
            <input
              className="m-1 self-center rounded-lg"
              type="checkbox"
              id="HitSixtyeighty"
              name="HitSixtyeighty"
              value="HitSixtyeighty"
            />
            <label className=" self-center" htmlFor="HitSixtyeighty">
              60-80
            </label>

            <input
              className="m-1 self-center rounded-lg"
              type="text"
              id="numHitSixty"
              name="numHitSixty"
              placeholder="#"
            />
            <label className=" self-center" htmlFor="numHitSixty">
              # Packages
            </label>
          </div>
          <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
            <h2>subtotal: {dtotal}</h2>
          </div>
        </div>
        <div className="flex-col text-center">
          <input
            className="m-1 self-center rounded-lg"
            type="text"
            id="Hourscart"
            name="Hourscart"
            placeholder="# Hours"
          />
          <label htmlFor="Hourscart"> Hours</label>
        </div>
        <div className="flex-col text-center">
          <button
            className="m-2 mx-auto rounded border border-slate-800 bg-transparent px-4 py-2 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
            type="submit"
          >
            Get Estimate
          </button>
        </div>
      </form>
    </div>
  );
}
Packages.propTypes = {
  boxtotal: PropTypes.number,
  OnBox: PropTypes.any,
  outtotal: PropTypes.number,
  OnOut: PropTypes.any,
  decktotal: PropTypes.number,
  OnDeck: PropTypes.any,
  startotal: PropTypes.number,
  OnStar: PropTypes.any,
  dtotal: PropTypes.number,
  OnD: PropTypes.any,
};
