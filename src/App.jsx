import React from 'react'
import SearchPage from './search/SearchPage'
import LogIn from './modal/LogIn'
import MetaMask from './blockchain/MetaMask'
import Ipfs from './blockchain/Ipfs'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      address: ""
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn(address) {
    this.setState({
      isLoggedIn: true,
      address: address
    })
  }

  logOut() {
    this.setState({
      isLoggedIn: false,
      address: ""
    })
  }

  content() {
    if (this.state.isLoggedIn) {
      return (
        <SearchPage
          address={this.state.address}
          contract={this.contract}
        />
      )
    } else {
      return <LogIn onLogIn={this.logIn} />
    }
  }

  render() {
    return (
      <MetaMask
        onLogIn={this.logIn}
        onLogOut={this.logOut}
        setWeb3={this.setWeb3}
        setContract={this.setContract}
      >
        <Ipfs setIpfs={this.setIpfs}>
          {this.content()}
        </Ipfs>
      </MetaMask>
    )
  }
}

export default App
