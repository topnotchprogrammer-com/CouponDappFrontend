import React from 'react';
import { Dropdown } from 'react-bootstrap'
import { Person } from 'react-bootstrap-icons'
import { DropdownButton } from 'react-bootstrap';

function showAddress(address) {
  return address.substring(0, 6)
    + '...'
    + address.substring(address.length - 4)
}

function User(props) {
  return (
    <DropdownButton
      alignRight
      title={<Person />}
      className="float-right ml-2"
    >
      <Dropdown.Item
        as="button"
        title={props.address}
      >
        {showAddress(props.address)}
      </Dropdown.Item>
    </DropdownButton>
  )
}

export default User
