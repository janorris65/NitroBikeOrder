import PropTypes from "prop-types";
import { useState } from "react";
export default function PackComponent({
  Starbuckspic,
  packtotal,
  OnPack,
  PriceA,
  PriceB,
  title,
  description,
}) {
  const [click, setClick] = useState(true);
  const onClicks = (event) => {
    event.preventDefault();
    setClick((prev) => !prev);
  };
  const onChanges = (event) => {
    console.log(
      event.target.parentNode.parentNode.querySelector("#BoxTwentythirty")
        .checked,
      event.target.parentNode.parentNode.querySelector("#BoxSixtyeighty")
        .checked,
      event.target.parentNode.parentNode.querySelector("#numBoxTwenty")?.value,
      event.target.parentNode.parentNode.querySelector("#numBoxSixty")?.value
    );

    console.log(packtotal);
    // event.preventDefault();
    if (
      event.target.parentNode.parentNode.querySelector("#BoxTwentythirty")
        .checked &&
      !event.target.parentNode.parentNode.querySelector("#BoxSixtyeighty")
        .checked
    ) {
      OnPack(
        Math.floor(
          100 *
            Number(
              event.target.parentNode.parentNode.querySelector("#numBoxTwenty")
                ?.value * PriceA
            )
        ) / 100
      );
    } else if (
      !event.target.parentNode.parentNode.querySelector("#BoxTwentythirty")
        .checked &&
      event.target.parentNode.parentNode.querySelector("#BoxSixtyeighty")
        .checked
    ) {
      OnPack(
        Math.floor(
          100 *
            Number(
              event.target.parentNode.parentNode.querySelector("#numBoxSixty")
                ?.value * PriceB
            )
        ) / 100
      );
    } else if (
      event.target.parentNode.parentNode.querySelector("#BoxTwentythirty")
        .checked &&
      event.target.parentNode.parentNode.querySelector("#BoxSixtyeighty")
        .checked
    ) {
      OnPack(
        Math.floor(
          100 *
            (Number(
              event.target.parentNode.parentNode.querySelector("#numBoxTwenty")
                ?.value * PriceA
            ) +
              Number(
                event.target.parentNode.parentNode.querySelector("#numBoxSixty")
                  ?.value * PriceB
              ))
        ) / 100
      );
    } else {
      OnPack(0);
    }
  };
  return (
    <div>
      <form onChange={onChanges}>
        <div
          className="group m-2 mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-stone-200 p-2 text-center
          shadow-2xl"
        >
          <button
            onClick={onClicks}
            className="rounded-full bg-emerald-500 px-4 py-2 font-bold text-white hover:bg-emerald-400"
          >
            <h3>
              {title} <span>{click ? "+" : "-"}</span>
            </h3>
          </button>
          <img
            src={Starbuckspic}
            className="h-[200px] rounded-lg object-cover p-1"
            alt="Pic of Nitros, Fraps, Lemonades"
          ></img>
          <p>{description}</p>
          <div hidden={click}>
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
              <h2>subtotal: {packtotal}</h2>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
PackComponent.propTypes = {
  packtotal: PropTypes.number,
  OnPack: PropTypes.any,
  Starbuckspic: PropTypes.any,
  PriceA: PropTypes.number,
  PriceB: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
};
