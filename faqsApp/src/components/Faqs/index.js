import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  //   show = id => {
  //     this.setState(prevState => ({idslist: [...prevState.idslist, id]}))
  //   }

  //   hide = id => {
  //     const {idslist} = this.state
  //     if (idslist.includes(id)) {
  //       const index = idslist.indexOf(id)
  //       idslist.splice(index, 1)
  //     }
  //     this.setState({idslist: [idslist]})
  //     console.log(idslist)
  //   }

  const {faqsList} = props
  return (
    <div className="back">
      <h1 className="heading">FAQs</h1>
      <ul className="list-container">
        {faqsList.map(each => (
          <FaqItem itemdetails={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default Faqs
