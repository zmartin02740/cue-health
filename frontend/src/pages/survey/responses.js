import React from 'react'
import { useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Response from './response'

export default () => {
  const responses = useSelector((state) => state.responses)
  const responsesComponent = responses.length > 0 ?
    responses.map((response, index) => {
      return <Response key={index} indexOne={index} response={response} />
    }) : null;
  return (
    <>
    <Form.Label>Responses</Form.Label>
    {responsesComponent}
    </>
  )
}