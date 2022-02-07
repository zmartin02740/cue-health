import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
  const questionOne = useSelector((state) => state.questionOne)
  const questionTwo = useSelector((state) => state.questionTwo)
  const questionThree = useSelector((state) => state.questionThree)
  const questionFour = useSelector((state) => state.questionFour)
  const questionFive = useSelector((state) => state.questionFive)
  const responses = useSelector((state) => state.responses)
  const dispatch = useDispatch()

  const surveySubmission = () => {
    const response = {
      qOne: questionOne,
      qTwo: questionTwo,
      qThree: questionThree,
      qFour: questionFour,
      qFive: questionFive
    }

    dispatch({ type: 'UPDATERESPONSES', payload: response })
    dispatch({ type: 'UPDATESQUESTIONONE', payload: '' })
    dispatch({ type: 'UPDATESQUESTIONTWO', payload: '' })
    dispatch({ type: 'UPDATESQUESTIONTHREE', payload: '' })
    dispatch({ type: 'CLEARQUESTIONFOUR' })
    dispatch({ type: 'CLEARQUESTIONFIVE' })
    dispatch({ type: 'ZERO' })
    console.log(response, responses)
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