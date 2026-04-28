import Nav from "./components/NavBar/Nav/Nav";
import Li from "./components/NavBar/Li/Li";
import NavLinks from "./components/NavBar/NavLinks/NavLinks";
import MenuPlegable from "./components/NavBar/MenuPlegable/MenuPlegable";
import Header from "./components/NavBar/Header/Header";
import HeaderTitle from "./components/NavBar/HeaderTitle/HeaderTitle";
import SocialIcons from "./components/NavBar/SocialIcons/SocialIcons";
import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import TicketComponent from "./components/Ticket/TicketComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { CartContextProvider } from "./components/Context/cartContext";
import { TicketContextProvider } from "./components/Context/ticketContext";
import CartContainer from "./components/CartWidget/CartContainer";
import Contacto from "./components/Contacto/Contacto";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <CartContextProvider>
        <TicketContextProvider>
          <BrowserRouter
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
          >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Container>
                {/* Logo/Título envuelto en Link de react-router-dom */}
                <Navbar.Brand as={Link} to="/">
                  <HeaderTitle />
                </Navbar.Brand>

                {/* Botón Hamburguesa */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Contenido colapsable */}
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                      Inicio
                    </Nav.Link>

                    {/* Dropdown de Colecciones (reemplaza a MenuPlegable) */}
                    <NavDropdown
                      title="Colecciones"
                      id="collasible-nav-dropdown"
                    >
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
                  </Nav>

                  {/* Iconos Sociales al final */}
                  <div className="d-flex">
                    <SocialIcons />
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>

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
    </>
  );
}

export default App;
