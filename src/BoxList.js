import Box from "./Box";
const BoxList = () => {
  return (
    <div>
      <h1>BoxList</h1>
      <Box bgcolor="red" width="100px" height="100px" />
      <Box bgcolor="blue" width="150px" height="150px" />
      <Box bgcolor="green" width="200px" height="200px" />
    </div>
  );
};
export default BoxList;
