import {useState, useEffect} from 'react';
import {useUser} from '../hooks/apiHooks';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {getUserByToken} = useUser();
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        const userData = await getUserByToken(token);
        setUser(userData);
      }
    };
    getUser();
  }, []);
  if (!user) {
    return <p>Loading user information...</p>;
  }
  return (
    <>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>User ID: {user.user_id}</p>
    </>
  );
};

export default Profile;
