import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  const value = useSelector((state) => state.questionThree)
  const dispatch = useDispatch()
  let optionsComponent = question.options.map((option, index) =>
    <option key={index} value={option}>{option}</option>)

  const handleSelectInputChange = (event) => {
    dispatch({ type: 'UPDATESQUESTIONTHREE', payload: event.target.value })
  }

  return (
    <>
    <Form.Label>{question.title}:</Form.Label>
    <Form.Select onChange={handleSelectInputChange} value={value}>
      {optionsComponent}
    </Form.Select>
    </>
  )
}