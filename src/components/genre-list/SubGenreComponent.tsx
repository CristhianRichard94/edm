import { Spotify } from "react-spotify-embed";
import { SubGenre } from "../../data/interface";
import ArtistComponent from "../artist/ArtistComponent";

function SubGenreComponent({ subGenre }: { subGenre: SubGenre }) {
  return (
    <div className="subgenre">
      <div className="body">
        <h2 className="title">
          {subGenre.name} <span className="bpm">({subGenre.bpmRange})</span>
        </h2>
        <p className="description">{subGenre.description}</p>
        <p className="description">Some Artists:</p>
        <div className="artists">
          {subGenre.artists.map((artist) => (
            <ArtistComponent artist={artist} key={artist.name} />
          ))}
        </div>
      </div>
      <div className="player">
        <Spotify
          link={subGenre.playlist || ""}
          width="100%"
          height="360"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title={subGenre.name}
        />
      </div>
    </div>
  );
}

export default SubGenreComponent;
