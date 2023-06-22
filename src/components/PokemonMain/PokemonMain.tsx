import React, { useState } from "react";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import { PokemonDetails } from "../PokemonDetails/PokemonDetails";
import { Stack } from "@mui/material";

function PokemonMain() {
  const [pokemonObject, setPokemonObject] = useState<object | null>(null);
  return (
    <>
      <Stack spacing={1}>
        <PokemonSearch
          setPokemonObject={setPokemonObject}
          pokemonObject={pokemonObject}
        />
        {pokemonObject && <PokemonDetails pokemonObject={pokemonObject} />}
      </Stack>
    </>
  );
}

export default PokemonMain;
