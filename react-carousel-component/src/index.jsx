import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel'

const imageList = [
  {
    id: 1,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  },
  {
    id: 2,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
  },
  {
    id: 3,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
  },
  {
    id: 4,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png",
  },
  {
    id: 5,
    url: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
  },
];

ReactDOM.render(<Carousel imageList={imageList}/>, document.querySelector('#root'));
