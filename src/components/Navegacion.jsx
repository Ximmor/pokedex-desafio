import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

const Navegacion = () => {
  // Función para validar la ruta activa y aplicar estilos
  const validateRoot = ({ isActive }) => isActive ? 'menu active' : 'menu';
  // Utilizamos el hook useNavigate para obtener una función de navegación
  const navigate = useNavigate();

  // Función para manejar el clic en el logo y volver a la página principal
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
        <Container>
          {/* Logo que al hacer clic lleva a la página principal */}
          <Navbar.Brand onClick={handleClick}><img width='50' src='../src/assets/img/Pokeball.png' alt='Pokedex' /></Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              {/* Enlaces de navegación */}
              <NavLink to='/' className={validateRoot}>Home</NavLink>
              <NavLink to='/pokemon' className={validateRoot}>Pokémon</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navegacion;