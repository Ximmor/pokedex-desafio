import { createContext, useEffect, useState } from 'react';

// Creamos un contexto de React
export const PokemonContext = createContext();

// Definimos nuestro componente PokemonContextProvider
const PokemonContextProvider = ({ children }) => {
  // Definimos estados para almacenar datos relacionados con los Pokémon
  const [nombresPokemon, setNombresPokemon] = useState([]);
  const [seleccionPokemon, setSeleccionPokemon] = useState('');
  const [datosPokemon, setDatosPokemon] = useState({});

  // Función asincrónica para obtener los nombres de los Pokémon
  const obtenerNombres = async () => {
    const url1 = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1025';
    try {
      const res1 = await fetch(url1);
      const pokeNombres = await res1.json();
      setNombresPokemon(pokeNombres.results);
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  };

  // Función asincrónica para obtener los datos de un Pokémon específico
  const obtenerDatos = async (name) => {
    const url2 = 'https://pokeapi.co/api/v2/pokemon';
    try {
      const res2 = await fetch(`${url2}/${name}`);
      const pokeDatos = await res2.json();
      // Extraemos los datos relevantes del Pokémon
      const src = pokeDatos.sprites.other['official-artwork'].front_default;
      const stats = pokeDatos.stats.map((stat) => ({
        name: stat.stat.name,
        base: stat.base_stat
      }));
      const types = pokeDatos.types.map((e) => (e.type.name));
      const type1 = types[0];
      const type2 = types[1];
      const weight = pokeDatos.weight;
      const id = pokeDatos.id;
      const datos = { name, src, stats, type1, type2, weight, id };
      // Establecemos los datos del Pokémon en el estado
      setDatosPokemon(datos);
    } catch (error) {
      console.error('Error al obtener los Pokémon:', error);
    }
  };

  // Efecto para obtener los nombres de los Pokémon cuando el componente se monta
  useEffect(() => {
    obtenerNombres();
  }, []);

  // Función para manejar la selección de un Pokémon
  const handleSelectorPokemon = (pokemon) => {
    setSeleccionPokemon(pokemon);
  };

  // Función para convertir la primera letra de una cadena a mayúscula
  const mayuscula = (tipo) => {
    const primerElemento = tipo.charAt(0).toUpperCase();
    const restoDelElemento = tipo.slice(1);
    const stringCompleto = primerElemento + restoDelElemento;
    return stringCompleto;
  };

  // Estado global que contiene los nombres de los Pokémon, el Pokémon seleccionado,
  // una función para manejar la selección de Pokémon, los datos del Pokémon seleccionado,
  // una función para convertir la primera letra a mayúscula y la función para obtener
  // los datos de un Pokémon.
  const globalState = {
    nombresPokemon,
    seleccionPokemon,
    handleSelectorPokemon,
    datosPokemon,
    mayuscula,
    obtenerDatos
  };

  // Renderizamos el contexto proporcionando el valor del estado global a los componentes hijos
  return (
    <PokemonContext.Provider value={globalState}>{children}</PokemonContext.Provider>
  );
};

export default PokemonContextProvider;