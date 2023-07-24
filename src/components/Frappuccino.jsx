export default function Frappuccino({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Frappuccinoroast.value) +
      Number(event.target.Coffeesyrup.value) +
      Number(event.target.Cremesyrup.value) +
      Number(event.target.Vanillapowder.value) +
      Number(event.target.Mochasauce.value) +
      Number(event.target.Carameldrizzle.value) +
      Number(event.target.Caramelpieces.value) +
      Number(event.target.Strawberrysauce.value) +
      Number(event.target.Frapchips.value);
    onClick(sum);
    tonClick({ statefrap: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statefrap: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Frappuccino</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Frappuccinoroast"
            name="Frappuccinoroast"
            placeholder="# Bottles"
          />
          <label htmlFor="Frappuccinoroast"> Frappuccino Roast</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Coffeesyrup"
            name="Coffeesyrup"
            placeholder="# Bottles"
          />
          <label htmlFor="Coffeesyrup"> Coffee Base</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Cremesyrup"
            name="Cremesyrup"
            placeholder="# Bottles"
          />
          <label htmlFor="Cremesyrup"> Creme Base</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Vanillapowder"
            name="Vanillapowder"
            placeholder="# Bottles"
          />
          <label htmlFor="Vanillapowder"> Vanilla Bean Powder</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Mochasauce"
            name="Mochasauce"
            placeholder="# Bottles"
          />
          <label htmlFor="Mochasauce"> Mocha Sauce</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Carameldrizzle"
            name="Carameldrizzle"
            placeholder="# Bottles"
          />
          <label htmlFor="Carameldrizzle"> Caramel Drizzle Sauce</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Caramelpieces"
            name="Caramelpieces"
            placeholder="# Bottles"
          />
          <label htmlFor="Caramelpieces"> Caramel Crunch</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Strawberrysauce"
            name="Strawberrysauce"
            placeholder="# Bottles"
          />
          <label htmlFor="Strawberrysauce"> Strawberry Sauce</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Frapchips"
            name="Frapchips"
            placeholder="# Bottles"
          />
          <label htmlFor="Frapchips"> Mocha Frap Chips</label>
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
