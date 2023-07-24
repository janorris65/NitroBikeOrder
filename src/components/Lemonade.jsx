export default function Lemonade({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    const sum =
      Number(event.target.Lemonade.value) +
      Number(event.target.Strawberryacai.value) +
      Number(event.target.Mangodragon.value) +
      Number(event.target.Pineapple.value) +
      Number(event.target.Strawinclu.value) +
      Number(event.target.Dragoninclu.value) +
      Number(event.target.Pineinclu.value);
    onClick(sum);
    tonClick({ statelemonade: sum });
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statelemonade: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>Lemonades</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Lemonade"
            name="Lemonade"
            placeholder="# Pitchers"
          />
          <label htmlFor="Lemonade"> Lemonade</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Strawberryacai"
            name="Strawberryacai"
            placeholder="# Pitchers"
          />
          <label htmlFor="Strawberryacai"> Strawberry Acai</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Mangodragon"
            name="Mangodragon"
            placeholder="# Pitchers"
          />
          <label htmlFor="Mangodragon"> Mango Dragonfruit</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Pineapple"
            name="Pineapple"
            placeholder="# Pitchers"
          />
          <label htmlFor="Pineapple"> Pineapple Passionfruit</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Strawinclu"
            name="Strawinclu"
            placeholder="# Bags"
          />
          <label htmlFor="Strawinclu"> Strawberry Inclusions</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Dragoninclu"
            name="Dragoninclu"
            placeholder="# Bags"
          />
          <label htmlFor="Dragoninclu"> Dragonfruit Inclusions</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Pineinclu"
            name="Pineinclu"
            placeholder="# Bags"
          />
          <label htmlFor="Pineinclu"> Pineapple Inclusions</label>
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
