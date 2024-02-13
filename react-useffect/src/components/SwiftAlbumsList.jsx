// Import Axios
import axios from "axios";

// Import useEffect - a react Hook
import { useState, useEffect } from "react";

// Import Link to go to Album Details
import {Link} from 'react-router-dom';

function SwiftAlbumsList() {
    const [albums, setAlbums] = useState(null);

  // useEffect runs code as a side-effect of a happening.
  useEffect(() => {
    axios
      .get("https://taylor-swift-api.sarbo.workers.dev/albums")
      .then((response) => {
         //console.log(response);
         setAlbums(response.data);
      })
      .catch((error)=>{
        console.log(error); 
      });
  }, []); // -> when we leave an empty array, we run code as a side-effect of a component being rendered for the first time.

  return (<div>
        <h3>Taylor Swift Albums</h3>
        {albums && albums.map((album)=>{
            return (
              <article key={album.album_id}>
                <img src="https://www.wmhbradio.org/wp-content/uploads/2016/07/music-placeholder.png"></img>
                <Link to={`/albums/${album.album_id}`}>
                  <h3>{album.title}</h3>
                </Link>
                <p>{album.release_date}</p>
              </article>
            );
        })}
    </div>);
}

export default SwiftAlbumsList;
