import Item from '../ItemList/Item';
import FlexContainer from './FlexContainer';
import '../../App.css';
function ItemList(props) {
  return (
    <div className="padding-top1 montserrat-light fondo">
      <h2 className='margin-bottom padding-top2'>{props.greeting}</h2>
      <FlexContainer>
        {props.products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;
