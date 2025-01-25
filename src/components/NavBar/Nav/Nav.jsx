import './Nav.css';
export default function Nav(props) {
  const { text, children } = props;

  let displayText;
  if (children === undefined) {
    displayText = text;
  } else {
    displayText = children;
  }

  return <nav className="nav-container montserrat-light">{displayText}</nav>;
}
