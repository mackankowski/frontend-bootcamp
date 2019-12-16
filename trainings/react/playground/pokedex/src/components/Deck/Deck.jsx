import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { DeckWrapper } from './Deck.css';
import { URL, cardsQuery } from '../../constants'
import SearchBar from '../SearchBar/SearchBar';

const Deck = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState([]);

  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchQuery))

  useEffect(() => {
    fetch(`${URL}${cardsQuery}`)
      .then(response => response.json())
      .then(json => setPokemons(json.cards))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <SearchBar returnValue={setSearchQuery}/>
      <DeckWrapper>
        {filteredPokemons.map(
          pokemon =>
            pokemon && (
              <Card
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                imageUrl={pokemon.imageUrl}
              />
            )
        )}
      </DeckWrapper>
    </>
  );
};

export default Deck;
