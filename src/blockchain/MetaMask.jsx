import NoMetamask from '../modal/NoMetaMask';
import Web3 from 'web3'
import React from 'react';
import Contract from '../contract/dev/couponModify.json' // dev

// todo: prod build
class MetaMask extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  hasMetaMask() {
    return typeof window.ethereum !== 'undefined'
  }

  componentDidMount() {
    let metamask = this

    window.web3 = new Web3(window.ethereum)
    window.contract = new window.web3.eth.Contract(
      Contract.abi,
      Contract.networks[
        Object.keys(Contract.networks)[0]
      ].address
    )

    if (!metamask.hasMetaMask()) {
      return
    }

    window.ethereum.autoRefreshOnNetworkChange = false
    window.ethereum.on('accountsChanged', function (accounts) {
      if (accounts.length > 0) {
        metamask.props.onLogIn(accounts[0])
      } else {
        metamask.props.onLogOut()
      }
    })
  }

  render() {
    if (this.hasMetaMask()) {
      return this.props.children
    }
    return <NoMetamask />
  }
}

export default MetaMask