import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Pokemon, PokemonDetalles } from './views'; // Importamos los componentes de las vistas
import PokemonContextProvider from './context/PokemonContext'; // Importamos el proveedor del contexto de Pokémon
import Navegacion from './components/Navegacion'; // Importamos el componente de navegación
import NotFound from './components/NotFound'; // Importamos el componente de página no encontrada

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* Envuelve la aplicación con el proveedor del contexto de Pokémon */}
        <PokemonContextProvider>
          {/* Renderiza el componente de navegación */}
          <Navegacion />
          {/* Define las rutas de la aplicación */}
          <Routes>
            {/* Ruta para la página de inicio */}
            <Route path='/' element={<Home />} />
            {/* Ruta para la lista de Pokémon */}
            <Route path='/pokemon' element={<Pokemon />} />
            {/* Ruta para los detalles de un Pokémon específico */}
            <Route path='/pokemon/:name' element={<PokemonDetalles />} />
            {/* Ruta para la página no encontrada */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </PokemonContextProvider>
      </>
    </BrowserRouter>
  );
};

export default App;