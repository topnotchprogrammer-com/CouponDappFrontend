import React from 'react';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import './MenuBottom.scss'

function MenuBottom(props) {
  return (
    <Row className={props.className + " menu-bottom"}>
      <Col>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <a
              href={"#link" + i}
              className="ml-2 mr-2 text-nowrap"
              key={i}
            >
              Link {i}
            </a>
          )
        })}
      </Col>
    </Row>
  )
}

export default MenuBottom
