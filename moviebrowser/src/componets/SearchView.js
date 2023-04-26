import Hero from './Hero';

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(searchResults, 'are the seatch results');
  return (
    <div>
      <Hero text={title} />
    </div>
  );
};

export default SearchView;
