import React from 'react';
import { Container } from 'react-bootstrap'
import SearchBox from './SearchBox'
import MenuTop from '../menu/MenuTop'
import MenuBottom from '../menu/MenuBottom'

function h1Class() {
  return [
    'display-2',
    'mt-5',
    'mb-5',
    'pt-5',
    'text-center'
  ].join(' ')
}

function menuClass() {
  return [
    'mt-5',
    'mb-5',
    'pt-5',
    'text-center'
  ].join(' ')
}

function SearchPage(props) {
  return (
    <Container>
      <MenuTop
        className="mt-5 mb-5"
        address={props.address}
      />
      <h1 className={h1Class()}>
        Coupon Dapp
      </h1>
      <SearchBox
        className="h-100 pb-5"
        contract={props.contract}
      />
      <MenuBottom className={menuClass()} />
    </Container>
  )
}

export default SearchPage
