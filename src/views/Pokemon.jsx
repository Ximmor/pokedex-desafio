import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';

const Pokemon = () => {
  // Utilizamos el hook useContext para acceder al contexto de PokemonContext
  const { nombresPokemon, seleccionPokemon, handleSelectorPokemon, mayuscula } = useContext(PokemonContext);
  // Utilizamos el hook useNavigate para obtener una función de navegación
  const navigate = useNavigate();

  // Función para redirigir al usuario a la página de detalles del Pokémon seleccionado
  const alDetalle = () => {
    if (seleccionPokemon) {
      // Si se ha seleccionado un Pokémon, redirigimos a la página de detalles de ese Pokémon
      navigate(`/pokemon/${seleccionPokemon}`);
    } else {
      // Si no se ha seleccionado ningún Pokémon, mostramos una alerta
      window.alert('Debes seleccionar un Pokémon');
    }
  };

  return (
    <>
      <div className='pokemon'>
        {/* Título de la página */}
        <h1>Selecciona un Pokémon</h1>
        <section>
          {/* Selector para elegir un Pokémon */}
          <select className='selectorPokemon' value={seleccionPokemon} onChange={({ target }) => handleSelectorPokemon(target.value)}>
            {/* Opción predeterminada del selector */}
            <option value='' disabled>Selecciona un Pokémon</option>
            {/* Mapeamos los nombres de los Pokémon para crear opciones en el selector */}
            {nombresPokemon.map(({ name }) => (
              <option key={name} value={name}>{mayuscula(name)}</option>
            ))}
          </select>
          {/* Botón para ver los detalles del Pokémon seleccionado */}
          <article>
            <button className='btn btn-danger' onClick={alDetalle}><strong>Ver Pokémon</strong></button>
          </article>
        </section>
      </div>
    </>
  );
};

export default Pokemon;