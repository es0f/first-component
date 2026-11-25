import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const item = state.item;
  const navigate = useNavigate();
  return (
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.media_type.startsWith('image/') ? (
        <img src={item.filename} alt={item.title} width="400" />
      ) : (
        <video src={item.filename} controls width="400" />
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Single;