import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Question from './question'
import ValidationHandler from '../../common/ValidationHandler';

export function Questions({
  questionCount,
  questions
 }) {
  const [validations, setValidations] = useState([])
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

    let validationErrors = []

    const qOneValidation = ValidationHandler(questionOne)
    const qTwoValidation = ValidationHandler(questionTwo)
    const qThreeValidation = ValidationHandler(questionThree)
    const qFourValidation = ValidationHandler(questionFour)
    const qFiveValidation = ValidationHandler(questionFive)

    if (qOneValidation.length > 0) validationErrors.push(qOneValidation)
    if (qTwoValidation.length > 0) validationErrors.push(qTwoValidation)
    if (qThreeValidation.length > 0) validationErrors.push(qThreeValidation)
    if (qFourValidation.length > 0) validationErrors.push(qFourValidation)
    if (qFiveValidation.length > 0) validationErrors.push(qFiveValidation)

    if (validationErrors.length > 0) {
      setValidations(validationErrors)
    } else {
      dispatch({ type: 'UPDATERESPONSES', payload: response })
      dispatch({ type: 'UPDATESQUESTIONONE', payload: '' })
      dispatch({ type: 'UPDATESQUESTIONTWO', payload: '' })
      dispatch({ type: 'UPDATESQUESTIONTHREE', payload: '' })
      dispatch({ type: 'CLEARQUESTIONFOUR' })
      dispatch({ type: 'CLEARQUESTIONFIVE' })
      dispatch({ type: 'ZERO' })
    }
  }

  const buttonStyle = {
    margin: 40
  }

  const containerStyle = {
    paddingTop: 30
  }

  const errorStyle = {
    color: 'red'
  }

  let chosenQuestion = <Question question={questions[value]} />
  return (
    <Container style={containerStyle}>
      <Col>{chosenQuestion}</Col>
      <Col>({value + 1} / {questionCount})</Col>
      <Col style={errorStyle}>{validations.length > 0 ? validations.join(', ') : null}</Col>
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