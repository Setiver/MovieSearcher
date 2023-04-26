import Hero from './Hero';

const Home = () => {
  return (
    <div>
      <Hero text="Welcome to React" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Ta strona służy tylko i jedynie do nauki React.</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" className="image-react" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
