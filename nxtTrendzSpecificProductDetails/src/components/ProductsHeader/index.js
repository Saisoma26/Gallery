import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const {sortOptions, activeOptionId, changeSortby, onchangesearchInput} = props
  console.log(sortOptions)

  const onChangeSortby = event => {
    changeSortby(event.target.value)
  }

  let searchInput

  const onChangeSearchInput = event => {
    searchInput = event.target.value
    if (event.key === 'Enter') {
      onchangesearchInput(searchInput)
    }
  }

  return (
    <div className="products-header">
      <input
        className="searchEl"
        type="search"
        onChange={onChangeSearchInput}
        value={searchInput}
      />
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
