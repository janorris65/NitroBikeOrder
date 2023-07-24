export default function Tea({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Chai.value) +
      Number(event.target.Black.value) +
      Number(event.target.Green.value) +
      Number(event.target.Passion.value) +
      Number(event.target.Assorted.value);
    onClick(sum);
    tonClick({ statetea: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statetea: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Tea</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Chai"
            name="Chai"
            placeholder="# Containers"
          />
          <label htmlFor="Chai"> Chai Tea Base</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Black"
            name="Black"
            placeholder="# Pitchers"
          />
          <label htmlFor="Black"> Black Tea</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Green"
            name="Green"
            placeholder="# Pitchers"
          />
          <label htmlFor="Green"> Green Tea</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Passion"
            name="Passion"
            placeholder="# Pitchers"
          />
          <label htmlFor="Passion"> Passion</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Assorted"
            name="Assorted"
            placeholder="# Boxes"
          />
          <label htmlFor="Assorted"> Assorted Tea Sachets</label>
        </div>

        <div className="flex-col text-center">
          <button
            className="m-2 mx-auto  rounded border border-slate-800 bg-transparent px-4 py-2 font-semibold text-slate-700 hover:border-transparent hover:bg-slate-500 hover:text-white"
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
