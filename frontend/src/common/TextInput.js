import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  const value = useSelector((state) => state.questionOne)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    dispatch({ type: 'UPDATESQUESTIONONE', payload: event.target.value })
  }
  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      type="text"
      onChange={handleInputChange}
      value={value}
    />
    <Form.Text muted>
      {question.hint}
    </Form.Text>
    </>
  )
}