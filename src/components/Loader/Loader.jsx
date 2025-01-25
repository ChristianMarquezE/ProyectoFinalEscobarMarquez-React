import { RotateLoader } from 'react-spinners';
import './Loader.css';

function Loader() {
  return (
    <div className="loader-container">
      <RotateLoader size={15} speedMultiplier={2} />
    </div>
  );
}

export default Loader;
