export const Jumbotron = () => {
  return (
    <div className="container-fluid p-0 position-relative tagline_container">
      <div className="background-img w-100 h-100">
        <div className="position-absolute top-0 start-50 translate-middle-x text-center w-100 mt-md-1 mt-1">
          <div className="bg-light text-dark p-0 p-md-2 rounded mt-md-2 mt-1 w-100">
            <h1 className="title_big">One Page Wonder</h1>
          </div>
          <div className="bg-light text-dark p-1 rounded mt-md-3 mt-1 w-100">
            <h2 className="subtitle_big">Will Knock Your Socks Off</h2>
          </div>
        </div>
        <button className="btn btn-success fs-4 position-absolute bottom-0 start-50 translate-middle-x mb-4">
          Call to action!
        </button>
      </div>
    </div>
  );
};
