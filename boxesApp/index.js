const Box = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <p className="text">{className}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box className="Small" />
      <Box className="Medium" />
      <Box className="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
