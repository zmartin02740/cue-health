import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/form'

export default ({ question }) => {
  const value = useSelector((state) => state.questionTwo)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    dispatch({ type: 'UPDATESQUESTIONTWO', payload: event.target.value })
  }
  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      as="textarea"
      onChange={handleInputChange}
      placeholder="Leave a comment here"
      style={{ height: '100px' }}
      value={value}
    />
    </>
  )
}