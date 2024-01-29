import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const FullBurger = () => {
  const { id } = useParams();
  const [ burger, setBurger ] = React.useState();
  const navigate = useNavigate();
  
  console.log(id)

  React.useEffect(() => {
    async function fetchBurger() {
      try {
        const { data } = await axios.get('https://6410a431ff89c2e2d4e4e0d2.mockapi.io/items/' + id);
        setBurger(data);
      } catch (error) {
        alert("Error when you want to get information :(");
        navigate("/")
      }
    }

    fetchBurger();
  }, [])

  if(!burger) {
    return "Loading ...";
  }

  return (
    <div className='container'>
      {burger && (
      <>
        <img src={burger.imageUrl} alt="" />
        <h2>{burger.title}</h2>
        <p>Rating: {burger.rating}</p>
        <h4>{burger.price} $</h4>
      </>
    )}
    </div>
  )
}

export default FullBurger;