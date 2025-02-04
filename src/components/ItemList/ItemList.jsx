import Item from '../ItemList/Item';
import FlexContainer from './FlexContainer';
import '../../index.css';
function ItemList(props) {
  return (
    <div className="margin-top1 montserrat-light">
      <h2 className='margin-bottom'>{props.greeting}</h2>
      <FlexContainer>
        {props.products.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </FlexContainer>
    </div>
  );
}

export default ItemList;
