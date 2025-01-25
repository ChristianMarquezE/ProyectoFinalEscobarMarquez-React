import getAsyncData, {
  getAsyncItemsByCategory,
  getAsyncItemsByColeccion,
} from '../../data/database';
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const { catid } = useParams();
  const { colid } = useParams();

  useEffect(() => {
    setLoading(true); // Set loading to true before fetching
    if (catid === undefined && colid === undefined) {
      getAsyncData()
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false); // Set loading to false after fetching
        })
        .catch((error) => {
          alert(error);
          setLoading(false); // Set loading to false on error
        });
    }
    if (catid !== undefined) {
      getAsyncItemsByCategory(catid)
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false); // Set loading to false after fetching
        })
        .catch((error) => {
          alert(error);
          setLoading(false); // Set loading to false on error
        });
    }
    if (catid === undefined && colid !== undefined) {
      getAsyncItemsByColeccion(colid)
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false); // Set loading to false after fetching
        })
        .catch((error) => {
          alert(error);
          setLoading(false); // Set loading to false on error
        });
    }
  }, [catid, colid]);

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
