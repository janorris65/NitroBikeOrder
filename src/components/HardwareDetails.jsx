export default function Hardwaredetails({ onClick, tonClick, subtotal }) {
  const onClicks = (event) => {
    event.preventDefault();
    console.log();
    if (event.target.Nitro.checked && event.target.Blender.checked) {
      onClick(Number(event.target.Hourscart.value) * 35);
      tonClick({ statehardware: Number(event.target.Hourscart.value) * 35 });
    } else if (event.target.Nitro.checked && !event.target.Blender.checked) {
      onClick(Number(event.target.Hourscart.value) * 25);
      tonClick({ statehardware: Number(event.target.Hourscart.value) * 25 });
    } else if (
      event.target.Blender.checked &&
      !event.target.Nitro.checked &&
      event.target.Cold.checked
    ) {
      onClick(Number(event.target.Hourscart.value) * 20);
      tonClick({ statehardware: Number(event.target.Hourscart.value) * 20 });
    } else if (
      event.target.Blender.checked &&
      !event.target.Nitro.checked &&
      !event.target.Cold.checked
    ) {
      onClick(Number(event.target.Hourscart.value) * 10);
      tonClick({ statehardware: Number(event.target.Hourscart.value) * 10 });
    } else if (
      !event.target.Blender.checked &&
      !event.target.Nitro.checked &&
      event.target.Cold.checked
    ) {
      onClick(Number(event.target.Hourscart.value) * 10);
      tonClick({ statehardware: Number(event.target.Hourscart.value) * 10 });
    }
  };
  const removeClick = (event) => {
    event.preventDefault();
    onClick(0);
    tonClick({ statehardware: 0 });
  };
  return (
    <div className="m-4 mx-auto max-w-sm overflow-hidden rounded bg-slate-300 shadow-2xl">
      <h2>HardWare And Details</h2>
      <form onSubmit={onClicks}>
        <div>
          <input
            className="m-1 rounded-lg"
            type="text"
            id="Hourscart"
            name="Hourscart"
            placeholder="# Hours"
          />
          <label htmlFor="Hourscart"> Hours</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="checkbox"
            id="Nitro"
            name="Nitro"
            value="Nitro"
          />
          <label htmlFor="Nitro"> NitroBike with Nitro Cold Brew</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="checkbox"
            id="Cold"
            name="Cold"
            value="Cold"
          />
          <label htmlFor="Nitro"> NitroBike with Iced Cold Brew</label>
        </div>
        <div>
          <input
            className="m-1 rounded-lg"
            type="checkbox"
            id="Blender"
            name="Blender"
            value="Blender"
          />
          <label htmlFor="Blender"> Frappuccino Blender</label>
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
