import React, { useState, useContext } from 'react'
import Form from 'react-bootstrap/Form'

export default ({ question }) => {
  const handleInputChange = (event) => {
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