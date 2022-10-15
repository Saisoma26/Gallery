const Button = (props) => {
  const { name } = props;
  return <button className={name}>{name}</button>;
};

const element = (
  <div className="back">
    <h1 className="heading">Social Buttons</h1>
    <div className="buttoncontainer">
      <Button name="Like" />
      <Button name="Comment" />
      <Button name="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
