export default function NavBar() {
  return (
    <header className="rounded-md border-4 border-gray-600 bg-gradient-to-r from-gray-300 from-10% to-emerald-500 to-90% font-serif shadow-2xl">
      <h1 className="bg-gradient-to-r from-emerald-600 to-slate-200 bg-clip-text text-4xl font-extrabold text-transparent">
        NitroBike
      </h1>
      <ol className="flex flex-row justify-evenly">
        <li>
          <a href="https://calendly.com/janorris65">
            <button className="bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-2xl font-extrabold text-transparent">
              Scheduling
            </button>
          </a>
        </li>
        <li className="bg-gradient-to-r from-emerald-600 to-slate-800 bg-clip-text text-2xl font-extrabold text-transparent">
          Ordering
        </li>
      </ol>
    </header>
  );
}
