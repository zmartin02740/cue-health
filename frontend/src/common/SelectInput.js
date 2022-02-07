import React, { useContext } from 'react'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  let optionsComponent = question.options.map((option, index) =>
    <option key={index} value={option}>{option}</option>)

  const handleSelectInputChange = (event) => {
  }

  return (
    <>
    <Form.Label>{question.title}:</Form.Label>
    <Form.Select onChange={handleSelectInputChange}>
      {optionsComponent}
    </Form.Select>
    </>
  )
}