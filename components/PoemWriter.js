const React = require('react')


class PoemWriter extends React.Component {
  constructor() {
    super()

    this.state = {
      isValid: false,
      poem: '',
    }

    this.updatePoem = this.updatePoem.bind(this)

  }

  isPoemValid(poemContent){
    let firstLine, secondLine, thirdLine
    let poemLines = poemContent.split("\n")
    if(poemLines.length === 3){
      firstLine = poemLines[0].trim().split(" ").length
      secondLine = poemLines[1].trim().split(" ").length
      thirdLine = poemLines[2].trim().split(" ").length
      }
      if((poemLines.length === 3) && (firstLine === 5) && (secondLine === 3) && (thirdLine === 5)){
        return true
      } else {
       return false
     }

  }

  updatePoem(event){
    this.setState({
      isValid: this.isPoemValid(event.target.value),
      poem: event.target.value
    })

  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.updatePoem} />
          {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>}
        
      </div>
    )
  }
}

module.exports = PoemWriter
