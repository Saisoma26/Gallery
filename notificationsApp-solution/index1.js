const Notification=props=>{
    {color,content,url}=props;
    return(
        <div className={color}>
            <img src={url} className="icon"/>
            <p className="text">{content}</p>
        </div>
    )
}

const element=(
    <div className="container">
        <h1 className="heading">Notifiactions</h1>
        <div className="list" >
            <Notification color="blue" content="Information Message" url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
             <Notification color="green" content="Success Message" url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
              <Notification color="yellow" content="Warning Message" url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        </div>
    </div>
)