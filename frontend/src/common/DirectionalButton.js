import React from 'react'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux';
import * as actionType from '../store/actions';

export function DirectionalButton({ direction, questionCount, questions }) {
  const value = useSelector((state) => state.value)
  const dispatch = useDispatch()
  const isLeft = direction === 'left'
  const isMax = value >= questionCount - 1
  const isMin = value <= 0

  const handleValueChange = () => {
    if (isLeft) {
      if (value <= 0) {
        alert('You are at the first question')
      } else {
        dispatch({ type: 'DECREASE' })
      }
    } else {
      if (value > questionCount - 2) {
        dispatch({ type: 'ZERO' })
      } else {
        dispatch({ type: 'INCREASE' })
      }
    }
  }

  const buttonStyle = {
    marginTop: 100
  };

  let buttonComponent

  if (isLeft && isMin) {
    buttonComponent = null
  } else if (!isLeft && isMax) {
    buttonComponent = null
  } else {
    buttonComponent = (
      <Button
        variant="primary"
        size="sm"
        style={buttonStyle}
        onClick={handleValueChange}>
        {isLeft ? 'Previous' : 'Next'} Question
      </Button>
    )
  }

  return (
    <>{buttonComponent}</>
  )
}

export default DirectionalButton;