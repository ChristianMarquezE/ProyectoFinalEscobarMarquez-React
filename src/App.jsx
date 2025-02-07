import Nav from './components/NavBar/Nav/Nav';
import Li from './components/NavBar/Li/Li';
import NavLinks from './components/NavBar/NavLinks/NavLinks';
import MenuPlegable from './components/NavBar/MenuPlegable/MenuPlegable';
import Header from './components/NavBar/Header/Header';
import HeaderTitle from './components/NavBar/HeaderTitle/HeaderTitle';
import SocialIcons from './components/NavBar/SocialIcons/SocialIcons';
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import TicketComponent from './components/Ticket/TicketComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';
import { CartContextProvider } from './components/Context/cartContext';
import { TicketContextProvider } from './components/Context/ticketContext';
import CartContainer from './components/CartWidget/CartContainer';
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <>
      <CartContextProvider>
        <TicketContextProvider>
          <BrowserRouter
            future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
          >
            <Header>
              <Link to="/">
                <HeaderTitle />
              </Link>

              <Nav>
                <NavLinks>
                  <Li texto="Inicio" to="/"></Li>
                  <div className="colecciones">
                    <NavLink to="/" className="colecciones-link">
                      Colecciones
                    </NavLink>
                    <MenuPlegable>
                      <Li texto="Praia" to="/coleccion/praia" />
                      <Li texto="Éclat Céleste" to="/coleccion/eclat-celeste" />
                      <Li
                        texto="Resplandor del desierto"
                        to="/coleccion/resplandor-del-desierto"
                      />
                      <Li texto="SastrO" to="/coleccion/sastro" />
                      <Li texto="Retrofutura" to="/coleccion/retrofutura" />
                      <Li texto="Ver Todo" to="/" />
                    </MenuPlegable>
                  </div>
                  <Li texto="Joyería" to="category/joyeria" />
                  <Li texto="Vestidos" to="category/vestidos" />
                  <Li texto="Jumpsuits" to="category/jumpsuits" />
                </NavLinks>
              </Nav>
              <SocialIcons />
            </Header>

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
