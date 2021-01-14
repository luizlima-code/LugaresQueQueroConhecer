import styled from 'styled-components'
import { useState } from "react";

export default function DivCards () {
  const [cardCountries, setCardCountries] = useState([
    { id: 1, name: "card-1"},
    { id: 2, name: "card-2"},
    { id: 3, name: "card-3"}
  ]);

  function handleAddCard() {
    setCardCountries([ ...cardCountries,
      { id: Math.random(), name: "Novo Repo"}
    ]);
  }
 
  return (
    <>
      <ul>
        {cardCountries.map(card =>(
          <li key={card.id}>{card.name}</li>
        ))}
      </ul>
      <button onClick={handleAddCard}>
        Salvar
      </button>
    </>
  );
}