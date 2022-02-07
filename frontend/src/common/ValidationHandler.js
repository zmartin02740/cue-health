import React from 'react'

export default (response) => {
  let validationError = ''
  if (typeof response.response === 'string') {
    if (response.response.length < 5) {
      if (response.title.includes('Price')) {
        validationError = `${response.title}: Please choose one of the dropdown options`
      } else {
        validationError = `${response.title}: Needs to be more than 5 characters`
      }
    }
    if (response.title.includes('Email')) {
      if (!response.response.includes('@')) {
        validationError = `${response.title}: Needs to have an @ symbol`
      }
    }
  } else {
    if (response.response.length < 1) {
      validationError = `${response.title}: Need to select at least one option`
    }
  }

  return validationError
}