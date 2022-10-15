import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {list} = props
  return (
    <ul className="list-container">
      {list.map(each => (
        <BlogItem itemdetails={each} key={each.id} />
      ))}
    </ul>
  )
}
export default BlogList
