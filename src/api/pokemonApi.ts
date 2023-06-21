const pokemonHunting = async (pokiName: string) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokiName}`;
  const response = await fetch(url);
  const foundpoki = response.json();

  return foundpoki;
};

export default pokemonHunting;
