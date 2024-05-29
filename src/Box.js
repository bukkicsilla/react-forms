const Box = ({ bgcolor, width = "150px", height = "150px" }) => {
  return (
    <div
      style={{ backgroundColor: bgcolor, width: width, height: height }}
    ></div>
  );
};
export default Box;
