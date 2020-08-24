import React from 'react';
import { Container } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'

function NoMetamask(props) {
  return (
    <Container>
      <Alert variant="danger" className="mt-5">
        <Alert.Heading>Error</Alert.Heading>
        <p>
          <a
            target="_blank"
            href="https://metamask.io/"
            rel="noopener noreferrer"
          >
            MetaMask
          </a> extension is required
          to use this app.
        </p>
      </Alert>
    </Container>
  )
}

export default NoMetamask
