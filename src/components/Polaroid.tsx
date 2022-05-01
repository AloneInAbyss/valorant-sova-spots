import { Link } from 'react-router-dom';

import './Polaroid.css';

function Polaroid(props: any) {
  if (props.disabled) {
    return (
      <div className="polaroid-disabled">
        <img src={props.src} alt="" />
        <div>
          <p className="text-center h4 py-3">{props.name}</p>
        </div>
      </div>
    );
  }

  return (
    <Link className="polaroid" to={props.link}>
      <img src={props.src} alt="" />
      <div>
        <p className="text-center h4 py-3">{props.name}</p>
      </div>
    </Link>
  );
}

export default Polaroid;
