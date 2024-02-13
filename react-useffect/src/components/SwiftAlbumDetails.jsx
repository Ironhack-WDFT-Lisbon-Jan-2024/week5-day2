import { useEffect, useState } from "react";

import axios from "axios";

function SwiftAlbumDetails(props) {
  const [albumDetails, setAlbumDetails] = useState(null);
  useEffect(() => {
    // Destructure props
    const { id } = props;
    axios
      .get(`https://taylor-swift-api.sarbo.workers.dev/albums/${id}`)
      .then((response) => {
        setAlbumDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {albumDetails &&
        albumDetails.map((track) => {
          return (
            <article key={track.song_id}>
              <h3>{track.title}</h3>
            </article>
          );
        })}
    </div>
  );
}

export default SwiftAlbumDetails;
