import { ReactEventHandler, SyntheticEvent } from "react";
import "./ArtistComponent.scss";
import { Artist } from "../../data/interface";

function ArtistComponent({ artist }: { artist: Artist }) {
  const onImgLoad: ReactEventHandler<HTMLImageElement> = (
    event: SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const img = event.target as HTMLImageElement;
    const aspectRatio = img.naturalHeight / img.naturalWidth;
    img.classList.add(
      `artist__image--${aspectRatio > 1 ? "portrait" : "landscape"}`
    );
  };
  const { name, link, imgSrc } = artist;
  return (
    <div className="artist">
      <a href={link} target="_blank" rel="noreferrer" className="artist__link">
        <img
          src={imgSrc}
          alt={name}
          className="artist__image"
          onLoad={onImgLoad}
        />
      </a>
      <span className="artist__tooltip">{name}</span>
    </div>
  );
}

export default ArtistComponent;
