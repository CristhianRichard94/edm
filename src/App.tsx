import './App.scss';

import GenreList from './genre-list/GenreList';

function App() {
  return (
    <div className="App">
      <GenreList />
      <div className="footer">
        <span>Made with ❤️ by Cristhian Richard</span>
        <a
          target="_blank"
          href="https://crichard-cv.firebaseapp.com/"
          rel="noreferrer"
        >
          About me
        </a>
      </div>
    </div>
  );
}

export default App;
