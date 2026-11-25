
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

const useAuthentication = () => {
  const postLogin = async (inputs) => {
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    };

    try {
      const loginResult = await fetchData(
        import.meta.env.VITE_AUTH_API + '/auth/login',
        fetchOptions,
      );
      console.log(loginResult);
      return loginResult;
    } catch (error) {
      console.log(error);
    }
  };

  return {postLogin};
};

const useUser = () => {
  const getUserByToken = async (token) => {
    const fetchOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const user = await fetchData(
        import.meta.env.VITE_AUTH_API + '/users/token',
        fetchOptions,
      );
      return user;
    } catch (error) {
      console.log(error);
    }
  };
  const postUser = async (inputs) => {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputs),
  };

  try {
    const result = await fetchData(
      import.meta.env.VITE_AUTH_API + '/users',
      fetchOptions,
    );
    return result;} 
    catch (error) {
    console.log(error);
    } 
    };
  return {getUserByToken, postUser};
};

export {useUser, useMedia, useAuthentication    };

