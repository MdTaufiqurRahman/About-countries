//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Country from './Components/Country/Country';

function App() {
  const [countries, setCountries] = useState ([]);
  const [cart, setCart] = useState ([]);

useEffect(()=>{
     fetch('https://restcountries.eu/rest/v2/all')
     .then(res =>res.json())
     .then(data =>setCountries(data))
     .catch(error =>console.log(error));
  }, [])

  const handleAddCountry = (country)=>{
    const newCart = [...cart, country];
    setCart(newCart);
  }

  return (
    <div>
      <nav>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/news">News</a>

      </nav>
      <h1>Total Country: {countries.length}</h1>
      <h3>Country added: {cart.length}</h3>
      <Cart cart={cart}></Cart>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }
    </div>
  );
}

export default App;
