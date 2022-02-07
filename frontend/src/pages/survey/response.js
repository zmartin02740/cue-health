import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default ({ response, indexOne }) => {
  const [showResponse, setShowResponse] = useState(false)

  const cardStyle = {
    marginTop: 10
  }
  const {
    qOne,
    qTwo,
    qThree,
    qFour,
    qFive
  } = response
  return (
    <Card style={cardStyle}>
      Response {indexOne + 1} <Button onClick={() => setShowResponse(!showResponse)} variant="light">Show {showResponse ? 'less' : 'more'}</Button>
      {showResponse && <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><b>{qOne.title}:</b> {qOne.response}</ListGroup.Item>
          <ListGroup.Item><b>{qTwo.title}:</b> {qTwo.response}</ListGroup.Item>
          <ListGroup.Item><b>{qThree.title}:</b> {qThree.response}</ListGroup.Item>
          <ListGroup.Item><b>{qFour.title}:</b> {qFour.response.join(', ')}</ListGroup.Item>
          <ListGroup.Item><b>{qFive.title}:</b> {qFive.response.join(', ')}</ListGroup.Item>
        </ListGroup>
      </Card.Body>}
    </Card>
  )
}