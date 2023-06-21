import { Button, TextField, Typography, Stack } from "@mui/material";
import React, { useState } from "react";
import pokemonHunting from "../../api/pokemonApi";
type PokemonSearchProps = {
  setPokemonObject: (value: object) => void;
  pokemonObject: object;
};
function PokemonSearch({
  setPokemonObject,
  pokemonObject,
}: PokemonSearchProps) {
  const [pokemonName, setPokemonName] = useState<string>("");

  const handleSearch = async () => {
    const pokemonSearch = await pokemonHunting(pokemonName.toLowerCase());
    console.log(pokemonSearch);

    setPokemonObject(pokemonSearch);
  };
  return (
    <>
      <Stack spacing={2}>
        <TextField
          label="Pokemon Name"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <Button
          variant="contained"
          disabled={!pokemonName.length}
          onClick={handleSearch}
        >
          Submit
        </Button>
      </Stack>
    </>
  );
}

export default PokemonSearch;
