export default function Creams({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Vanillasweetcream.value) +
      Number(event.target.half.value) +
      Number(event.target.heavy.value) +
      Number(event.target.twopercent.value) +
      Number(event.target.nonfat.value) +
      Number(event.target.whole.value);
    onClick(sum);
    tonClick({ statecream: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statecream: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Creams</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Vanillasweetcream"
            name="Vanillasweetcream"
            placeholder="# Pitchers"
          />
          <label htmlFor="Vanillasweetcream"> Vanilla Sweet Cream</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="half"
            name="half"
            placeholder="# Cartons"
          />
          <label htmlFor="half"> Half & Half</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="heavy"
            name="heavy"
            placeholder="# Cartons"
          />
          <label htmlFor="heavy"> Heavy Cream</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="twopercent"
            name="twopercent"
            placeholder="# Gallons"
          />
          <label htmlFor="twopercent"> 2% Milk</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="nonfat"
            name="nonfat"
            placeholder="# Gallons"
          />
          <label htmlFor="nonfat"> Nonfat Milk</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="whole"
            name="whole"
            placeholder="# Gallons"
          />
          <label htmlFor="whole"> Whole Milk</label>
        </div>
        <div className="flex-col text-center">
          <button
            className="m-2 mx-auto rounded border border-slate-800 bg-transparent px-4 py-2 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
            type="submit"
          >
            Add to Order
          </button>
        </div>
        <div className="mx-8">Subtotal: {subtotal}</div>
      </form>
      <div className="flex-col text-center">
        <button
          className="m-2 mx-auto rounded border border-slate-800 bg-transparent px-4 py-2 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
          type="click"
          onClick={removeClick}
        >
          Remove from Order
        </button>
      </div>
    </div>
  );
}
