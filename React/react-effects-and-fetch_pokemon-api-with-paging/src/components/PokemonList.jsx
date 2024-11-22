import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${
            (currentPage - 1) * 20
          }&limit=20`
        );
        const data = await response.json();
        setPokemon(data.results);
        setPrevious(data.previous);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, [currentPage]);

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function handlePreviousPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    <main>
      {previous && (
        <button type="button" onClick={handlePreviousPage}>
          Previous Page
        </button>
      )}
      <button type="button" onClick={handleNextPage}>
        Next Page
      </button>

      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <p>Current Page: {currentPage}</p>
    </main>
  );
}
