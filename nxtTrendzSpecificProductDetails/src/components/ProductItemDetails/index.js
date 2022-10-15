import Loader from 'react-loader-spinner'
import {Component} from 'react'
import SimilarProductItem from '../SimilarProductItem'
import Header from '../Header'
import './index.css'

const statusFetch = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProductItemDetails extends Component {
  state = {itemDetails: {}, count: 1, status: statusFetch.initial, errorMsg: ''}

  getItemDetails = async () => {
    this.setState({status: statusFetch.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/products/${id}`
    const response = await fetch(url)
    console.log(response.statuscode)
    if (response.status_code !== 404) {
      const data = await response.json()
      const convertSnaketoCamel = data1 => ({
        id: data1.id,
        imageUrl: data1.image_url,
        title: data1.title,
        price: data1.price,
        description: data1.description,
        brand: data1.brand,
        totalReviews: data1.total_reviews,
        rating: data1.rating,
        availability: data1.availability,
      })

      const updatedData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(each =>
          convertSnaketoCamel(each),
        ),
      }
      this.setState({itemDetails: updatedData, status: statusFetch.success})
    } else {
      this.setState({status: statusFetch.failure, errorMsg: response.error_msg})
    }
  }

  increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decrement = () => {
    const {count} = this.state
    if (count >= 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    } else {
      this.setState(prevState => ({count: prevState.count}))
    }
  }

  renderIncDec = () => {
    const {count} = this.state
    return (
      <div className="plus-minus-container">
        <button
          type="button"
          className="incre-decre-btn"
          onClick={this.decrement}
        >
          -
        </button>
        <p className="count">{count}</p>
        <button
          type="button"
          className="incre-decre-btn"
          onClick={this.increment}
        >
          +
        </button>
      </div>
    )
  }

  renderProductDetails = () => {
    const {itemDetails} = this.state
    return (
      <>
        <div className="ProductItemDetails-container">
          <img
            src={itemDetails.imageUrl}
            alt={itemDetails.title}
            className="productitem-image"
          />
          <div className="item-details-container">
            <h1 className="item-heading">{itemDetails.title}</h1>
            <p className="price">{itemDetails.price}</p>
            <div className="reviews-rating-container">
              <div className="rating-container">
                <p className="rating">{itemDetails.rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star-image"
                />
              </div>
              <p className="reviews">{itemDetails.total_reviews} reviews</p>
            </div>
            <p className="description">{itemDetails.description}</p>
            <p className="availability">
              Available :{itemDetails.availability}
            </p>
            <p className="brand">Brand :{itemDetails.brand}</p>
            {this.renderIncDec()}
            <button className="btn" type="button">
              Add to Cart
            </button>
          </div>
        </div>

        <ul className="similar-item-container">
          {itemDetails.similarProducts.map(each => (
            <SimilarProductItem similarProduct={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderloader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  renderfailureview = errorMsg => (
    <div className="failureView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="error view"
        className="error-image"
      />
      <p className="error-msg">{errorMsg}</p>
    </div>
  )

  renderfetchStatus = () => {
    const {status, errorMsg} = this.state
    switch (status) {
      case statusFetch.loading:
        return this.renderloader()
      case statusFetch.success:
        return this.renderProductDetails()
      case statusFetch.failure:
        return this.renderfailureview(errorMsg)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderfetchStatus()}
      </>
    )
  }
}

export default ProductItemDetails
