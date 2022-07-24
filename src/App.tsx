import pokedex from "./assets/pokedex.png";

function App() {
  return (
    <div className="mt-4 inline-block p-[15px] relative">
      <img
        className="absolute left-1/2 bottom-[55%] translate-x-[-63%] translate-y-[20%] h-[18%]"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif"
        alt="pokemon"
      />
      <h1 className="absolute text-slate-500 top-[54.5%] right-[27%] text-dynamic">
        <span className="">6</span> -{" "}
        <span className="capitalize text-slate-800">charizard</span>
      </h1>
      <img className="w-full max-w-[425px]" src={pokedex} alt="Pokedex" />
    </div>
  );
}

export default App;
