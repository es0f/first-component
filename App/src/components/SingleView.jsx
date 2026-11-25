const SingleView = (props) => {
  const {item, setSelectedItem} = props;
  return (
    <dialog open={Boolean(item)}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.media_type.startsWith('image/') ? (
        <img src={item.filename} alt={item.title} width="400" />
      ) : (
        <video src={item.filename} controls width="400" />
      )}
      <button onClick={() => setSelectedItem(null)}>Close</button>
    </dialog>
  );
};
export default SingleView;
