<div className="innercontainer">
  <Notification
    color="blue"
    content="Information Message"
    url="https://assets.ccbp.in/frontend/react/primary-icon-img.png"
  />
  <Notification
    color="green"
    content="Success Message"
    url="https://assets.ccbp.in/frontend/react/success-icon-img.png"
  />
  <Notification
    color="yellow"
    content="Waring Message"
    url="https://assets.ccbp.in/frontend/react/warning-icon-img.png"
  />
  <Notification
    color="red"
    content="Error Message"
    url="https://assets.ccbp.in/frontend/react/danger-icon-img.png"
  />
</div>;

<div className={color}>
  <img src={url} className="icon" />
  <p className="text">{content}</p>
</div>;
