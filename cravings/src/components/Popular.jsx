import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Popular() {

  let [popular, setPopular] = useState([]);
  let recipes = [];

  useEffect(() => {
    getPopular();
  }, []);

  const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian%2Cdessert&number=10';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c491733ccdmshf324338ac60a5cbp10756cjsn8abae4d7c1b7'
    }
  };

  let getPopular = async() => {
    let api = await fetch(url, options);
    let data = await api.json();
    setPopular(data.recipes);
    console.log(data);
  } 

  return (
    <div>
      <h2>Popular Recipes</h2>
      {popular.map((recipe) => {
        return(
          <Wrapper key={recipe.id}>
            <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title}></img>
              </Card>
          </Wrapper>
        );
      })}
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
`;

export default Popular;

/*
{popular.map((recipe) => {
        return(
          <div>
            <h3>recipe.title</h3>
          </div>
        );
      })}
*/ 