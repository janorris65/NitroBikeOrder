import { useState } from "react";
export default function Faq() {
  const [click, setClick] = useState(true);
  const onClicks = (event) => {
    event.preventDefault();
    setClick((prev) => !prev);
  };
  return (
    <>
      <button
        onClick={onClicks}
        className="min-w-full rounded-3xl bg-emerald-500 px-4 py-2 font-bold  text-white hover:bg-emerald-400 sm:min-w-[50%]"
      >
        <h3>
          FAQ <span>{click ? "+" : "-"}</span>
        </h3>
        <div hidden={click}>
          <div
            className="group m-2 mx-auto flex max-w-sm flex-col overflow-hidden rounded-lg bg-stone-200 p-2 text-center
         text-black shadow-2xl"
          >
            Packages are sized by the approximate number of guests to serve.
            Choose the package type(s) and number of packages for an estimate.
            Check Scheduling to see if your date is available.
            (underconstruction) Contact: Call/Text (704)941-8431 for further
            details.
          </div>
        </div>
      </button>
    </>
  );
}
