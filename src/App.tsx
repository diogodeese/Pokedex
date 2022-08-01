import { useEffect, useState, useRef, InputHTMLAttributes } from "react";
import pokedex from "./assets/pokedex.png";

function App() {
  const [loading, setLoading] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [pokemonNumber, setPokemonNumber] = useState(1);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");
  const searchBar = useRef<HTMLInputElement>(null);

  function increaseNumber() {
    setLoading(true);
    setPokemonNumber(pokemonNumber + 1);
    setPokemonName("");
  }

  function decreaseNumber() {
    setLoading(true);
    setPokemonNumber(pokemonNumber - 1);
    setPokemonName("");
  }

  useEffect(() => {
    const fetchPokemon = async (requestedPokemon?: any) => {
      const APIResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${requestedPokemon}`
      );

      if (APIResponse.status === 200) {
        const pokemon = await APIResponse.json();
        setPokemonNumber(pokemon.id);
        setPokemonName(pokemon.name);
        setPokemonImage(
          pokemon.sprites.versions["generation-v"]["black-white"].animated
            .front_default
        );
        setLoading(false);
        setSearchError(false);
      } else {
        setLoading(false);
        setSearchError(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();

      e = e || window.event;

      if (e.keyCode === 37) {
        decreaseNumber(); // Left Arrow
      } else if (e.keyCode === 39) {
        increaseNumber(); // Right Arrow
      }
    };

    fetchPokemon(pokemonName || pokemonNumber);

    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [pokemonName, pokemonNumber]);

  return (
    <div className="mt-5 inline-block p-[15px] relative">
      {!loading && !searchError && (
        <img
          className="absolute left-1/2 bottom-[55%] translate-x-[-63%] translate-y-[20%] h-[18%]"
          src={pokemonImage}
          alt="pokemon"
        />
      )}

      <h1 className="absolute text-slate-500 top-[54.5%] right-[27%] text-pokemonNameDynamic">
        {!loading && !searchError && <span>{pokemonNumber} - </span>}

        <span className="capitalize text-slate-800">
          {loading ? "Loading" : searchError ? "Not Found" : pokemonName}
        </span>
      </h1>
      <img className="w-full max-w-[425px]" src={pokedex} alt="Pokedex" />

      <form
        className="absolute w-[65%] top-[65%] left-[13.5%]"
        onSubmit={(e) => {
          e.preventDefault();
          if (searchBar.current !== null) {
            console.log(searchBar.current.value);
            setPokemonName(searchBar.current.value);
            searchBar.current.value = "";
            setLoading(true);
          }
        }}
      >
        <input
          className="w-full outline-none p-[4%] text-slate-700 text-inputDynamic border-2 border-slate-700 rounded shadow-input"
          type="search"
          placeholder="Name or Number"
          ref={searchBar}
          required
        />
      </form>

      <div className="flex gap-5 absolute bottom-[10%] left-2/4 w-[65%] translate-x-[-57%]">
        <button
          className="w-2/4 p-[4%] border-2 border-black rounded text-inputDynamic text-white bg-slate-800 shadow-navigate active:text-sm active:shadow-pressed"
          onClick={decreaseNumber}
        >
          &lt; Prev
        </button>
        <button
          className="w-2/4 p-[4%] border-2 border-black rounded text-inputDynamic text-white bg-slate-800 shadow-navigate active:text-sm active:shadow-pressed"
          onClick={increaseNumber}
        >
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default App;
