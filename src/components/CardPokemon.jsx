import { useContext } from 'react';
import { Card, CardBody, CardImg, CardTitle } from 'react-bootstrap';
import { PokemonContext } from '../context/PokemonContext';
import { useNavigate } from 'react-router-dom';

const CardPokemon = () => {
  // Utilizamos el hook useContext para acceder al contexto de PokemonContext
  const { datosPokemon } = useContext(PokemonContext);
  // Utilizamos el hook useNavigate para obtener la función de navegación
  const navigate = useNavigate();

  // Función para manejar el clic en el botón de volver
  const handleClick = () => {
    navigate('/pokemon');
  };

  return (
    <>
      <section className='pokemonCard'>
        <Card className='Card'>
          <article className='img'>
            {/* Renderizamos la imagen del Pokémon */}
            <CardImg className='pokemonCardImg' src={datosPokemon.src} alt={datosPokemon.name} />
          </article>
          <article className='pokemonDetails'>
            <CardBody className='card_body'>
              {/* Renderizamos el título del Pokémon */}
              <CardTitle className='text-capitalize'><strong className='text-capitalize'>Nombre</strong>:{' '}{datosPokemon.name}</CardTitle>
              <ul>
                {/* Renderizamos el número del Pokémon */}
                <li><strong className='text-capitalize'>Pokemon N°</strong>:{' '}{datosPokemon.id}</li>
                {/* Renderizamos las estadísticas del Pokémon */}
                {datosPokemon.stats?.map((stat, i) => (
                  <li key={i}>
                    <strong className='text-capitalize'>{stat.name}</strong>:{' '}{stat.base}
                  </li>
                ))}
                {/* Renderizamos los tipos del Pokémon */}
                <li><strong className='text-capitalize'>Tipos</strong>:{' '}<span className='text-capitalize'>{datosPokemon.type1}{' '}{datosPokemon.type2}</span></li>
              </ul>
            </CardBody>
          </article>
        </Card>
      </section>
      {/* Botón para volver a la selección de Pokémon */}
      <button className='btn btn-danger' onClick={handleClick}><strong>Volver a Selección</strong></button>
    </>
  );
};

export default CardPokemon;