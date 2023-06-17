import { useEffect } from "react";
import "./App.scss";

import GenreList from "./genre-list/GenreList";

function App() {
  useEffect(() => {
    const typeWriter = (element: HTMLElement, text: string, i = 0) => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(() => typeWriter(element, text, i), 50);
      }
    };

    Array.from(
      document.querySelectorAll(
        ".header .title, .paragraph-1,.paragraph-2,.paragraph-3"
      )
    ).forEach(async (e) => {
      const text = e.textContent;
      e.textContent = "";
      typeWriter(e as HTMLElement, text || "");
    });
  }, []);

  return (
    <div className="App">
      <div className="header">
        <img src="header.jpg" alt="EDM Concert" />
        <h1 className="title">Electronic music subgenres</h1>
        <p className="paragraph-1">
          This is simple website that describes the different electronic
          subgenres ordered by beats per minute (bpm).
        </p>
        <p className="paragraph-2">The information was extracted by ChatGPT.</p>
        <p className="paragraph-3">No copyrights intended.</p>
      </div>
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
