import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  const values = useSelector((state) => state.questionFour)
  const dispatch = useDispatch()
  const handleInputChange = (event) => {
    dispatch({ type: 'UPDATESQUESTIONFOUR', payload: event.target.value })
  }

  return (
    <>
    <Form.Label>{question.title}</Form.Label>
    <Form.Control
      type="file"
      onChange={handleInputChange}
      value={values[-1]}
    />
    <Form.Text muted>
      {question.hint}
    </Form.Text>
    {values.length > 0 ?
      values.map((file, index) => {
        return (
          <Card key={index}>
            <Card.Body>{file}</Card.Body>
          </Card>
        )
      })
      : null}
    </>
  )
}