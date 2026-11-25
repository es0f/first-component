
import {useState, useEffect} from 'react';
import {fetchData} from '../utils/fetchdata';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData(
          import.meta.env.VITE_MEDIA_API + '/media',
        );
        setMediaArray(json);
      } catch (error) {
        console.log(error);
      }
    };
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
