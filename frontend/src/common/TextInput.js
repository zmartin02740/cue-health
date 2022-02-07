import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'

export default ({ currentState, question }) => {
  const handleInputChange = (event) => {
  }
  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      type="text"
      onChange={handleInputChange}
    />
    <Form.Text muted>
      {question.hint}
    </Form.Text>
    </>
  )
}