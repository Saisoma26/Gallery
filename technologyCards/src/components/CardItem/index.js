import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  return (
    <div className="card-container">
      <h1 className="heading">{cardDetails.title}</h1>
      <p className="description">{cardDetails.description}</p>
      <img src={cardDetails.imgUrl} className="image" alt={cardDetails.title} />
    </div>
  )
}

export default CardItem
