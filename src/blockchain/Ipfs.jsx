import React from 'react';
const ipfsClient = require('ipfs-http-client')

// todo: prod build
class Ipfs extends React.Component {
  constructor(props) {
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    window.ipfs = new ipfsClient({
      host: 'localhost', // dev
      port: 5002,
      protocol: 'http'
    })
  }

  render() {
    return this.props.children
  }
}

export default Ipfs