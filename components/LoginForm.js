const React = require('react')

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.updatePassword = this.updatePassword.bind(this)

  }

  updateUser(event){
    this.setState({
      username: event.target.value,
    })
    
  }

  updatePassword(event){
    this.setState({
      password: event.target.value,
    })
  }

  onSubmit(event){
    event.preventDefault()
    if (this.state.password.length > 0 && this.state.username.length > 0) {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.updateUser} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    )
  }
}

module.exports = LoginForm
