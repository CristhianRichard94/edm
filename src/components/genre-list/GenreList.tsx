import "./GenreList.scss";

import subgenreList from "./subGenreList";
import { Suspense, lazy } from "react";
const SubGenreComponent = lazy(() => import("./SubGenreComponent"));

function GenreList() {
  // const [activePlayerIndex, setActivePlayerIndex] = useState(-1);
  // const [players, setPlayers] = useState(
  //   [] as Array<EventSource | MessageEventSource | null>
  // );
  // useEffect(() => {
  //   window.addEventListener("message", (event) => {
  //     if (event.origin === "https://open.spotify.com") {
  //       if (event.data.type === "ready") {
  //         players.push(event.source);
  //         setPlayers(Array.from(new Set(players)));
  //       }

  //       if (event.data.type === "playback_update") {
  //         const index = players.findIndex((player) => player === event.source);
  //         if (index !== activePlayerIndex) {
  //           if (index >= 0 && !event.data.payload.isPaused) {
  //             (players[activePlayerIndex] as Window)?.postMessage(
  //               { command: "toggle" },
  //               "*"
  //             );
  //           }
  //           setActivePlayerIndex(index);
  //         }
  //       }
  //     }
  //   });
  // }, []);

  return (
    <div className="genre-list">
      {subgenreList.map((subgenre) => (
        <Suspense fallback={<div>Loading...</div>} key={subgenre.name}>
          <SubGenreComponent subGenre={subgenre} key={subgenre.name} />
        </Suspense>
      ))}
    </div>
  );
}

export default GenreList;
