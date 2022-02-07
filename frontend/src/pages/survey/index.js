import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Questions from './questions'
import DirectionalButton from '../../common/DirectionalButton'
import questions from '../../data/questionsObj'

export default () => {
  const questionCount = Object.keys(questions).length

  return (
    <Container>
      <Row>
        <Col>
          <DirectionalButton
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
            direction={'right'}
            questionCount={questionCount}
            questions={questions}
          />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          RESPONSES
        </Col>
      </Row>
    </Container>

  )
}
