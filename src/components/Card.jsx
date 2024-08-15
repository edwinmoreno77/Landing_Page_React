import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 rounded">
      <div className="card m-1">
        <img
          src={`https://picsum.photos/800/600?random=${props.num}`} //generate a random image
          className="card-img-top"
          alt="img"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text small">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <a href="#" className="btn btn-success small">
            Go Somewhere!
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  num: PropTypes.number,
};
