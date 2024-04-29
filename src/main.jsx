// Importamos los estilos CSS principales de la aplicación
import './main.css';

// Importamos las bibliotecas necesarias de React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importamos el componente principal de la aplicación
import App from './App.jsx';

// Utilizamos ReactDOM.createRoot para renderizar la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // Utilizamos React.StrictMode para activar el modo estricto de React
  <React.StrictMode>
    {/* Renderizamos el componente principal de la aplicación */}
    <App />
  </React.StrictMode>
);