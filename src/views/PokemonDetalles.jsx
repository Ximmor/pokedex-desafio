import { useParams } from 'react-router-dom';
import CardPokemon from '../components/CardPokemon';
import { useContext, useEffect } from 'react';
import { PokemonContext } from '../context/PokemonContext';

const PokemonDetalles = () => {
  // Obtengo  el parámetro de la URL que contiene el nombre del Pokémon
  const { name } = useParams();
  
  // Utilizo el hook useContext para acceder al contexto de PokemonContext
  const { obtenerDatos } = useContext(PokemonContext);

  // Utilizo el hook useEffect para cargar los datos del Pokémon al cargar el componente
  useEffect(() => {
    obtenerDatos(name); // Llamo a la función obtenerDatos con el nombre del Pokémon como argumento
  }, [name, obtenerDatos]); // La función se ejecutará cada vez que cambie el nombre del Pokémon o la función obtenerDatos

  return (
    <>
      {/* Se renderiza  el componente CardPokemon dentro de un div con la clase 'detalles' */}
      <div className='detalles'><CardPokemon /></div>
    </>
  );
};

export default PokemonDetalles;