export default function Syrup({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Vanilla.value) +
      Number(event.target.Caramel.value) +
      Number(event.target.Brownsugar.value) +
      Number(event.target.Toastedvanilla.value) +
      Number(event.target.Cinnamondolce.value) +
      Number(event.target.Cincaramel.value) +
      Number(event.target.Raspberry.value) +
      Number(event.target.Hazelnut.value) +
      Number(event.target.Toffeenut.value) +
      Number(event.target.Sugarfree.value) +
      Number(event.target.Peppermint.value) +
      Number(event.target.Liquidcane.value) +
      Number(event.target.Honeyblend.value) +
      Number(event.target.Mochasauce.value) +
      Number(event.target.Whitemochasauce.value);
    onClick(sum);
    tonClick({ statesyrup: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statesyrup: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Syrups</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Vanilla"
            name="Vanilla"
            placeholder="# Bottles"
          />
          <label htmlFor="Vanilla"> Vanilla</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Caramel"
            name="Caramel"
            placeholder="# Bottles"
          />
          <label htmlFor="Caramel"> Caramel</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Brownsugar"
            name="Brownsugar"
            placeholder="# Bottles"
          />
          <label htmlFor="Brownsugar"> Brown Sugar</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Toastedvanilla"
            name="Toastedvanilla"
            placeholder="# Bottles"
          />
          <label htmlFor="Toastedvanilla"> Toasted Vanilla</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Cinnamondolce"
            name="Cinnamondolce"
            placeholder="# Bottles"
          />
          <label htmlFor="Cinnamondolce"> Cinnamon Dolce</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Cincaramel"
            name="Cincaramel"
            placeholder="# Bottles"
          />
          <label htmlFor="Cincaramel"> Cinnamon Caramel</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Raspberry"
            name="Raspberry"
            placeholder="# Bottles"
          />
          <label htmlFor="Raspberry"> Raspberry</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Hazelnut"
            name="Hazelnut"
            placeholder="# Bottles"
          />
          <label htmlFor="Hazelnut"> Hazelnut</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Toffeenut"
            name="Toffeenut"
            placeholder="# Bottles"
          />
          <label htmlFor="Toffeenut"> Toffeenut</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Sugarfree"
            name="Sugarfree"
            placeholder="# Bottles"
          />
          <label htmlFor="Sugarfree"> Sugarfree Vanilla</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Peppermint"
            name="Peppermint"
            placeholder="# Bottles"
          />
          <label htmlFor="Peppermint"> Peppermint</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Liquidcane"
            name="Liquidcane"
            placeholder="# Bottles"
          />
          <label htmlFor="Liquidcane"> Liquid Cane</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Honeyblend"
            name="Honeyblend"
            placeholder="# Bottles"
          />
          <label htmlFor="Honeyblend"> Honey Blend</label>
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
            id="Whitemochasauce"
            name="Whitemochasauce"
            placeholder="# Bottles"
          />
          <label htmlFor="Whitemochasauce"> White Mocha Sauce</label>
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
