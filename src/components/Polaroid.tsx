import './Polaroid.css';

function Polaroid(props: any) {
  if (props.disabled) {
    return (
      <div>
        <img
          src={props.src}
          className="polaroid-disabled img-thumbnail"
          alt=""
        />
        <div>
          <p className="text-center h4 my-2">{props.name}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <img src={props.src} className="polaroid img-thumbnail" alt="" />
      <div>
        <p className="text-center h4 my-2">{props.name}</p>
      </div>
    </div>
  );
}

export default Polaroid;
