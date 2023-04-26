import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const updateSearchText = e => {
    // navigate('/search');
    setSearchText(e.target.value);
  };

  useEffect(() => {
    const keyDownHandler = event => {
      if (event.key === 'Enter') {
        event.preventDefault();

        navigate('/search');
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [navigate]);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <img src="https://icon-library.com/images/movie-icon-png/movie-icon-png-4.jpg" className="image-on-left" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link disabled" to="/home">
                Coming soon
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
            <button className="btn btn-outline-success" onClick={e => navigate('/search')} type="button">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
