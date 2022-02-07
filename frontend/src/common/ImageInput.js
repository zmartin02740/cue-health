import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'
import { LastSavedContext } from '../pages/survey/questions'

export default ({ currentState, question }) => {

  const handleInputChange = (event) => {
  }

  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      data-testid="upInput"
      type="file"
      onChange={handleInputChange}
    />
    <Form.Text muted>
      {question.hint}
    </Form.Text>
    </>
  )
}