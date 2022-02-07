import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  const values = useSelector((state) => state.questionFive)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    const value = event.target.value
    if (values.response.includes(value)) {
      let index = question.options.indexOf(value)
      let updatedSelection = values.response
      updatedSelection.splice(index, 1)

      dispatch({ type: 'REMOVEFROMQUESTIONFIVE', payload: updatedSelection })
    } else {
      dispatch({ type: 'ADDTOQUESTIONFIVE', payload: value })
    }
  }

  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    {question.options.map((option, index) => {
      return (
        <Form.Check
          key={index}
          label={option}
          onChange={handleInputChange}
          value={option}
        />
      )
    })}
    </>
  )
}