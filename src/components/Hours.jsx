export default function Hours(){
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