const Box = ({
  handleRemove,
  id,
  bgcolor,
  width = "150px",
  height = "150px",
}) => {
  const remove = (e) => {
    //e.target.parentNode.remove();
    handleRemove(id);
  };
  return (
    <div>
      <div
        style={{ backgroundColor: bgcolor, width: width, height: height }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
};
export default Box;
