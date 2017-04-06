const React = require('react')

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.charCount = this.charCount.bind(this)

    this.state = {
      chars: 0,
      value: '',
    }
  }

  charCount(event){
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.charCount}  />
        <p>{this.props.maxChars - this.state.value.length} words left</p>
      </div>
    )
  }
}

module.exports = TwitterMessage
