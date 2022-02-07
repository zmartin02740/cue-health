import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default ({ response, indexOne }) => {
  const [showResponse, setShowResponse] = useState(false)

  const cardStyle = {
    marginTop: 10
  }
  return (
    <Card style={cardStyle}>
      Response {indexOne + 1} <Button onClick={() => setShowResponse(!showResponse)} variant="light">Show {showResponse ? 'less' : 'more'}</Button>
      {showResponse && <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><b>Email:</b> {response.qOne}</ListGroup.Item>
          <ListGroup.Item><b>Description:</b> {response.qTwo}</ListGroup.Item>
          <ListGroup.Item><b>Price range:</b> {response.qThree}</ListGroup.Item>
          <ListGroup.Item><b>File uploads:</b> {response.qFour.join(', ')}</ListGroup.Item>
          <ListGroup.Item><b>Requested services:</b> {response.qFive.join(', ')}</ListGroup.Item>
        </ListGroup>
      </Card.Body>}
    </Card>
  )
}