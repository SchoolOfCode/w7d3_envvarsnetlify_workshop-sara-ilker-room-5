import React, { useEffect, useReducer } from "react";

const initialState = { name: '', imgUrl: '' };

function reducer(state, action) {
  switch (action.type) {
    case "GET_POKEMON":
      return { name: action.value.name, imgUrl:action.value.sprites.front_default};    
    default:
      return state;
  }
}

function Pokemon({ indexNoProp = 15 }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getPokemon() {
    let response = await fetch(
      `${process.env.REACT_APP_API_URL}/${indexNoProp}`
    );
    // let response = await fetch(`${"https://pokeapi.co/api/v2/pokemon"}/${indexNoProp}`);
    let data = await response.json();
    dispatch({ type: "GET_POKEMON", value: data });

    // console.log(data.sprites.front_default);
  }

  useEffect(() => {
    getPokemon();
  }, [indexNoProp]);

  return (
    <div>
    {console.log(state.imgUrl)}
      <h2>{state.name}</h2>
      <img src={state.imgUrl} alt={`Pokemon ${state.name}`} />
    </div>
  );
}

export default Pokemon;
