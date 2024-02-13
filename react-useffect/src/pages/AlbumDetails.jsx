import SwiftAlbumDetails from "../components/SwiftAlbumDetails";
import {useParams} from 'react-router-dom';

function AlbumDetails() {
  // Destructure Route Params
  const {id} = useParams();
  
  return (
    <section>
      {/* Send id route params via PROPS */}
      <SwiftAlbumDetails id={id} />
    </section>
  );
}

export default AlbumDetails;
