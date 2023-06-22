import { Typography, Stack, ImageListItem } from "@mui/material";
import { Image } from "mui-image";
import React from "react";
type PokemonDetailsProps = {
  pokemonObject: object | null;
};

export const PokemonDetails = ({ pokemonObject }: PokemonDetailsProps) => {
  console.log(pokemonObject);
  const { stats, name, sprites, types } = pokemonObject;
  return (
    <>
      <Stack>
        <Typography> {name}</Typography>
        <Image src={sprites?.front_default} />
        {/* {stats.length && ( */}
        <Stack>
          <Stack direction="row" spacing={5} ml={5}>
            <Typography>HP: {stats[0]?.base_stat} </Typography>
            <Typography>Attack : {stats[1]?.base_stat} </Typography>
            <Typography>Defense : {stats[2]?.base_stat} </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Typography>Special-Attack : {stats[3]?.base_stat} </Typography>
            <Typography>Special Defense : {stats[4]?.base_stat} </Typography>
            <Typography>Speed : {stats[5]?.base_stat} </Typography>
          </Stack>
          <Stack direction={"row"} spacing={1} ml={11}>
            <Typography>Type:</Typography>
            {types.map((item: object, i: number) => {
              if (i !== 0) {
                return <Typography>/ {item.type.name}</Typography>;
              }
              return <Typography>{item.type.name}</Typography>;
            })}
            <ImageListItem></ImageListItem>
          </Stack>
        </Stack>
        {/* )} */}
      </Stack>
    </>
  );
};
