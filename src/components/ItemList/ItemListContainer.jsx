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
  const [loading, setLoading] = useState(true);
  const { catid } = useParams();
  const { colid } = useParams();

  useEffect(() => {
    setLoading(true); 
    if (catid === undefined && colid === undefined) {
      getAsyncData()
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
    if (catid !== undefined) {
      getAsyncItemsByCategory(catid)
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false);
        });
    }
    if (catid === undefined && colid !== undefined) {
      getAsyncItemsByColeccion(colid)
        .then((respuesta) => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch((error) => {
          alert(error);
          setLoading(false); 
        });
    }
  }, [catid, colid]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <ItemList greeting={props.greeting} products={products} />
    </div>
  );
}

export default ItemListContainer;
