import { useEffect, useState } from "react";
import pokedex from "./assets/pokedex.png";

function App() {
  const [pokemonNumber, setPokemonNumber] = useState(0);
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonImage, setPokemonImage] = useState("");

  useEffect((pokemon: number | string = 1) => {
    const fetchPokemon = async (requestedPokemon?: any) => {
      const APIResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${requestedPokemon}`
      );
      const pokemon = await APIResponse.json();
      setPokemonNumber(pokemon.id);
      setPokemonName(pokemon.name);
      setPokemonImage(
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default
      );
    };

    fetchPokemon(pokemon);
  }, []);

  return (
    <div className="mt-4 inline-block p-[15px] relative">
      <img
        className="absolute left-1/2 bottom-[55%] translate-x-[-63%] translate-y-[20%] h-[18%]"
        src={pokemonImage}
        alt="pokemon"
      />
      <h1 className="absolute text-slate-500 top-[54.5%] right-[27%] text-pokemonNameDynamic">
        <span className="">{pokemonNumber}</span> -{" "}
        <span className="capitalize text-slate-800">{pokemonName}</span>
      </h1>
      <img className="w-full max-w-[425px]" src={pokedex} alt="Pokedex" />

      <form className="absolute w-[65%] top-[65%] left-[13.5%]">
        <input
          className="w-full outline-none p-[4%] text-slate-700 text-inputDynamic border-2 border-slate-700 rounded shadow-input"
          type="search"
          placeholder="Name or Number"
          required
        />
      </form>

      <div className="flex gap-5 absolute bottom-[10%] left-2/4 w-[65%] translate-x-[-57%]">
        <button className="w-2/4 p-[4%] border-2 border-black rounded text-inputDynamic text-white bg-slate-800 shadow-navigate active:text-sm active:shadow-pressed">
          Prev &lt;
        </button>
        <button className="w-2/4 p-[4%] border-2 border-black rounded text-inputDynamic text-white bg-slate-800 shadow-navigate active:text-sm active:shadow-pressed">
          Next &gt;
        </button>
      </div>
    </div>
  );
}

export default App;
