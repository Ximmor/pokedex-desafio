import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  // Utilizamos el hook useNavigate para obtener una función de navegación
  const navigate = useNavigate();

  // Función para manejar el clic en el botón y volver a la página principal
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Container className='text-center col-12 pt-5' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Imagen para mostrar el error 404 */}
        <img src='https://www.inboundcycle.com/hs-fs/hubfs/error%20404%20que%20es.png?width=768&name=error%20404%20que%20es.png' alt='404' style={{ width: '500px' }} />
        {/* Botón para volver a la página principal */}
        <button className='btn btn-warning' onClick={handleClick}><strong>Volver al Home</strong></button>
      </Container>
    </>
  );
};

export default NotFound;