import React, { useContext } from 'react'
import Form from 'react-bootstrap/form'

export default ({ question }) => {

  const handleInputChange = (event) => {
  }
  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      as="textarea"
      onChange={handleInputChange}
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
    />
    </>
  )
}