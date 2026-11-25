import MediaRow from '../components/MediaRow';
import {useState, useEffect} from 'react';
import SingleView from '../components/SingleView';
import {fetchData} from '../utils/fetchdata';
const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    const json = await fetchData('test.json');
    setMediaArray(json);
  };
useEffect(() => {
  const getMedia = async () => {
    try {
    const json = await fetchData(import.meta.env.VITE_MEDIA_API + '/media');
    setMediaArray(json);
  } catch (error) {
    console.log(error);
  }
};
  getMedia();
}, []); 
  return (
    <>
      <h2>My Media</h2>
      {selectedItem && (
        <SingleView item={selectedItem} setSelectedItem={setSelectedItem} />
      )}
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow
              key={item.media_id}
              item={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
