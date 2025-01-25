import './MenuPlegable.css';
function MenuPlegable(props) {
  const { text, children } = props;

  const displayText = children === undefined ? text : children;
  return <div className="colecciones-content">{displayText}</div>;
}

export default MenuPlegable;
