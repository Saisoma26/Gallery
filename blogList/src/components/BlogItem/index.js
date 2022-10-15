import './index.css'

const BlogItem = props => {
  const {itemdetails} = props
  return (
    <div className="item-container">
      <div className="frst-line">
        <h1 className="item-heading">{itemdetails.title}</h1>
        <p className="item-publish-date">{itemdetails.publishedDate}</p>
      </div>
      <p className="item-description">{itemdetails.description}</p>
    </div>
  )
}

export default BlogItem
