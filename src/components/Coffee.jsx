export default function Coffee({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Coldbrew.value) +
      Number(event.target.Nitrocoldbrew.value);
    onClick(sum);
    tonClick({ statecoffee: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statecoffee: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded  bg-slate-300 shadow-2xl">
      <h2>Coffee</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Nitrocoldbrew"
            name="Nitrocoldbrew"
            placeholder="# kegs"
          />
          <label htmlFor="Nitrocoldbrew"> Nitro Cold Brew</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Coldbrew"
            name="ColdBrew"
            placeholder="# Pitchers"
          />
          <label htmlFor="Coldbrew"> Cold Brew</label>
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
