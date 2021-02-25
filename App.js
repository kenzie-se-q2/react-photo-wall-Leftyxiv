// This URL can be combined with a photo id to fetch a photo.
function getPhotoFromId(photoId) {
  return `https://picsum.photos/id/${photoId}/200/200`;
}
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

const App = (props) => {
// Declare a state with useState([]), photos, setPhotos
const [photos, setPhotos] = useState([])

//declare a useEffect lifecycle method
useEffect(() => {
  fetch(PHOTO_LIST_URL)
  .then((res) => res.json())
  .then((picObj) => )
}, [])

// fetch an array of photos

// add array to state


// Check to make sure that the photos are rendering properly

// each image element needs to have attributes that include the file
// name the photo id and the url

//styling
// cause the header and .collage div to be centered
// no more than 4 photos per row
  return (
    <React.Fragment>
      <header>
        <h1>Photo Wall</h1>
        <p>
          Read the README and complete the numbered steps. Afterward,
          delete this paragraph.
        </p>
      </header>
      <div className="collage">
        {/* We use map below because Array.prototype.map is an expression,
         and for loops are not. JSX will only be able to interperet Javascript expressions
         when being used inside of curly braces.
         */}
        {/* 
        {photos.map((photo) => (
          <img
            alt="3. Fill me in with the photo's filename"
            key="4. Fill me in with the photo's id"
            src="5. Fill me in with the photo's URL"
          />
        ))} 
        */}
      </div>
    </React.Fragment>
  );
};
