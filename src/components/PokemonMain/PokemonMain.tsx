import React, { useState } from "react";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

function PokemonMain() {
  const [pokemonObject, setPokemonObject] = useState<object>({});
  return (
    <>
      <PokemonSearch
        setPokemonObject={setPokemonObject}
        pokemonObject={pokemonObject}
      />
    </>
  );
}

export default PokemonMain;
