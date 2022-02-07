import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Questions from './questions'
import Responses from './responses'
import DirectionalButton from '../../common/DirectionalButton'
import questions from '../../data/questionsObj'

export default () => {
  const questionCount = Object.keys(questions).length

  return (
    <Container data-test='surveyComponent'>
      <Row>
        <Col>
          <DirectionalButton
            data-test="directionalBtn"
            direction={'left'}
            questionCount={questionCount}
            questions={questions}
          />
        </Col>
        <Col xs={6}>
          <Questions questions={questions} questionCount={questionCount} />
        </Col>
        <Col>
          <DirectionalButton
            data-test="directionalBtn"
            direction={'right'}
            questionCount={questionCount}
            questions={questions}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Responses />
        </Col>
      </Row>
    </Container>

  )
}
