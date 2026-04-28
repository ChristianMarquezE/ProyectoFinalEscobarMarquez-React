import "bootstrap/dist/css/bootstrap.min.css"; // ¡Importante!
import "./App.css";

// 1. Componentes de Bootstrap
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// 2. React Router
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

// 3. Tus Contextos
import { CartContextProvider } from "./components/Context/cartContext";
import { TicketContextProvider } from "./components/Context/ticketContext";

// 4. Tus Componentes Locales (Importa solo los que uses)
import HeaderTitle from "./components/NavBar/HeaderTitle/HeaderTitle";
import SocialIcons from "./components/NavBar/SocialIcons/SocialIcons";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import TicketComponent from "./components/Ticket/TicketComponent";
import CartContainer from "./components/CartWidget/CartContainer";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <CartContextProvider>
      <TicketContextProvider>
        <BrowserRouter
          future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
        >
          {/* NAVBAR REESTRUCTURADO */}
          <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
            <Container>
              {/* Logo / Título */}
              <Navbar.Brand as={Link} to="/">
                <HeaderTitle />
              </Navbar.Brand>

              {/* Botón Hamburguesa */}
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              {/* Contenido colapsable */}
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">
                    Inicio
                  </Nav.Link>

                  {/* Reemplazo de MenuPlegable con NavDropdown */}
                  <NavDropdown title="Colecciones" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/coleccion/praia">
                      Praia
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/coleccion/eclat-celeste">
                      Éclat Céleste
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/coleccion/resplandor-del-desierto"
                    >
                      Resplandor del desierto
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/coleccion/sastro">
                      SastrO
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/coleccion/retrofutura">
                      Retrofutura
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/">
                      Ver Todo
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link as={Link} to="/category/joyeria">
                    Joyería
                  </Nav.Link>
                  <Nav.Link as={Link} to="/category/vestidos">
                    Vestidos
                  </Nav.Link>
                  <Nav.Link as={Link} to="/category/jumpsuits">
                    Jumpsuits
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contacto">
                    Contacto
                  </Nav.Link>
                </Nav>

                {/* Iconos sociales o CartWidget */}
                <div className="d-flex align-items-center">
                  <SocialIcons />
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* RUTAS (Sin cambios) */}
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Productos de Diseñadora Profesional:" />
              }
            />
            <Route
              path="/category/:catid"
              element={<ItemListContainer greeting="Compras por categoría" />}
            />
            <Route
              path="/coleccion/:colid"
              element={<ItemListContainer greeting="Compras por colección" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ticket/:ticketid" element={<TicketComponent />} />
          </Routes>
        </BrowserRouter>
      </TicketContextProvider>
    </CartContextProvider>
  );
}

export default App;
