import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAnswer: false,
    }
  }

  toggleState = () => {
    this.setState(prevState => ({
      showAnswer: !prevState.showAnswer,
    }))
  }

  render() {
    const {faqDetails} = this.props
    const {showAnswer} = this.state
    const {answerText, questionText} = faqDetails

    const plusOrMinus = showAnswer ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
      />
    )

    const displayAnswer = showAnswer && (
      <div>
        <p>{answerText}</p>
      </div>
    )

    return (
      <li className="faq-item-container">
        <div className="horizontal">
          <h1>{questionText}</h1>
          <button type="button" onClick={this.toggleState}>
            {plusOrMinus}
          </button>
        </div>
        {displayAnswer}
      </li>
    )
  }
}

export default FaqItem
