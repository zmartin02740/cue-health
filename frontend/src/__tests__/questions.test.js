import React from 'react'
import questions from '../data/questionsObj'

describe('Questions Object', () => {
  it('Should have 5 questions', () => {
    const questionNumber = Object.keys(questions).length

    expect(questionNumber).toBe(5)
  })

  it('Should have a TextInput question', () => {
    const { title, type, hint } = questions[0]

    expect(title).toBe('Email')
    expect(type).toBe(4)
    expect(hint).toBe('Please use the best email to reach you.')
  })

  it('Should have a Textarea question', () => {
    const { title, type } = questions[1]
    expect(title).toBe('Describe your project')
    expect(type).toBe(3)
  })

  it('Should have a Select question', () => {
    const { title, type, options } = questions[2]
    expect(title).toBe('Price range')
    expect(type).toBe(2)
    expect(options.length).toBe(5)
  })

  it('Should have a Image question', () => {
    const { title, type } = questions[3]
    expect(title).toBe('Upload any files you would like us to review ahead of time')
    expect(type).toBe(1)
  })

  it('Should have a Select question', () => {
    const { title, type, options } = questions[4]
    expect(title).toBe('What services would you like')
    expect(type).toBe(0)
    expect(options.length).toBe(5)
  })
})