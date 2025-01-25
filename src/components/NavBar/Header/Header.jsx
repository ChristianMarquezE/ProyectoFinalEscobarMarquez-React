import './Header.css';
function Header(props) {
  const { text, children } = props;

  const displayText = children === undefined ? text : children;

  return <header className="header-main">{displayText}</header>;
}

export default Header;
