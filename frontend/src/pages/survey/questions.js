import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Question from './question'

export function Questions({
  questionCount,
  questions
 }) {
  const value = useSelector((state) => state.value)

  const surveySubmission = () => {
  }

  const buttonStyle = {
    margin: 40
  }

  const containerStyle = {
    paddingTop: 30
  }

  let chosenQuestion = <Question question={questions[value]} />
  return (
    <Container style={containerStyle}>
      <Col>{chosenQuestion}</Col>
      <Col>({value + 1} / {questionCount})</Col>
      <Button
        onClick={surveySubmission}
        style={buttonStyle}
        variant="primary">
        Submit Survey
        </Button>
    </Container>
  )
}

export default Questions;