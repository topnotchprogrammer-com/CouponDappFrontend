import React from 'react';
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';

class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleClick() {
    console.log(this.state.value)
    this.props.contract.methods.getInventory().call().then((res) => {
      console.log(res)
    })
  }

  handleEnter(e) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <Row className={this.props.className}>
        <Col>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Search"
              className="form-control-lg"
              onChange={this.handleChange}
              onKeyDown={this.handleEnter}
              value={this.state.value}
            />
            <InputGroup.Prepend>
              <InputGroup.Text
                className="btn"
                onClick={this.handleClick}
              >
                <Search />
              </InputGroup.Text>
            </InputGroup.Prepend>
          </InputGroup>
        </Col>
      </Row>
    )
  }
}

export default SearchBox
