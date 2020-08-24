import React from 'react';
import { Container, Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

class LogIn extends React.Component {
  constructor(props) {
    super(props)
    this.connect = this.connect.bind(this);
  }

  async connect() {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });
    this.props.onLogIn(accounts[0])
  }

  render() {
    return (
      <Container>
        <Alert variant="info" className="mt-5">
          <Alert.Heading>
            Connect to MetaMask
          </Alert.Heading>
          <p className="mt-3">
            Please click Connect button
            to connect with
            your MetaMask account:
            <br />
            <Button
              variant="primary"
              size="lg"
              className="mt-3"
              onClick={this.connect}
            >
              Connect
            </Button>
          </p>
        </Alert>
      </Container>
    )
  }
}
export default LogIn
