import "./GenreList.scss";

import { SubGenre } from "../data/interface";
import subgenreList from "./subGenreList";

function GenreList() {
  function renderSubGenre(subGenre: SubGenre) {
    return (
      <div className="subgenre" key={subGenre.name}>
        <div className="body">
          <h2 className="title">
            {subGenre.name} <span className="bpm">({subGenre.bpmRange})</span>
          </h2>
          <p className="description">{subGenre.description}</p>
          <p className="description">
            Some Artists:
            {subGenre.artists.reduce((curr, acc) => acc + ", " + curr, " ")}
          </p>
        </div>
        <div className="player">
          <iframe
            title={subGenre.name}
            src={subGenre.playlist}
            width="100%"
            height="360"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }

  return (
    <div className="genre-list">
      {subgenreList.map((subgenre) => renderSubGenre(subgenre))}
    </div>
  );
}

export default GenreList;
