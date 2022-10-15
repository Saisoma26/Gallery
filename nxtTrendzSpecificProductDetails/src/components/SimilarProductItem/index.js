import './index.css'

const SimilarProductItem = props => {
  const {similarProduct} = props
  const {imageUrl, title, brand, price, rating} = similarProduct

  return (
    <li className="list-item">
      <img src={imageUrl} alt="similar product" className="similar-image" />
      <p className="product-name">{title}</p>
      <p className="brand">By {brand}</p>
      <div className="price-rating-container">
        <p className="price">{price}</p>
        <div className="rating-container">
          <p className="rating">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="stars"
            className="stars-image"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
