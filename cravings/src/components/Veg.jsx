import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Veg() {

    let [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const url = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian&number=9';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'X-RapidAPI-Key': 'c491733ccdmshf324338ac60a5cbp10756cjsn8abae4d7c1b7'
    }
  };

  let getVeggie = async() => {

    const check = localStorage.getItem('veggie');

    if(check){
      setVeggie(JSON.parse(check));
    } else {
      let api = await fetch(url, options);
      let data = await api.json();
      localStorage.setItem('veggie', JSON.stringify(data.recipes))
      setVeggie(data.recipes);
      console.log(data.recipes);
    }
  } 


  return (
    <div>
      <h2>Vegetarian Picks</h2>
      <Splide options={{
        perPage: 3,
        arrow: false,
        pagination: false,
        drag: "free",
        gap: "5rem",
      }}>
        {veggie.map((recipe) => {
          return(
            <SplideSlide>
              <Wrapper key={recipe.id}>
                <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}></img>
                    <Gradient />
                  </Card>
              </Wrapper>
            </SplideSlide>
          );
        })}
      </Splide>
      
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  border-radius: 1.5rem;
  position: relative;

  img {
    border-radius: 1.2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export default Veg