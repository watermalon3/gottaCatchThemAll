import { Button, TextField, Stack } from "@mui/material";
import React, { useState } from "react";
import pokemonHunting from "../../api/pokemonApi";
type PokemonSearchProps = {
  setPokemonObject: (value: object) => void;
  pokemonObject: object | null;
};
function PokemonSearch({
  setPokemonObject,
  pokemonObject,
}: PokemonSearchProps) {
  const [pokemonName, setPokemonName] = useState<string>("");
  const handleSearch = async () => {
    const pokemonSearch = await pokemonHunting(pokemonName.toLowerCase());

    setPokemonObject(pokemonSearch);
  };
  const RandomSearch = async () => {
    const number = Math.floor(Math.random() * 1000).toString();
    const pokemonSearch = await pokemonHunting(number);
    // console.log(pokemonSearch);

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
        <Stack direction={"row"} spacing={2}>
          <Button
            variant="contained"
            disabled={!pokemonName.length}
            onClick={handleSearch}
          >
            Submit
          </Button>
          <Button variant="contained" onClick={RandomSearch}>
            Random Pokemon
          </Button>
        </Stack>
      </Stack>
    </>
  );
}

export default PokemonSearch;
