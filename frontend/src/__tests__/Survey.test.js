import React from 'react'
import { shallow } from 'enzyme'
import Survey from '../pages/survey'

const setup = (props = {}) => {
  const component = shallow(<Survey {...props} />)
  return component
}

describe('<Survey />', () => {
  let component
  beforeEach(() => {
    component = setup()
  })
  it('Should render without any errors', () => {
    const wrapper = component.find(`[data-test='surveyComponent']`)
    expect(wrapper.length).toBe(1)
  })

  it('Should render two button components', () => {
    const btn = component.find(`[data-test='directionalBtn']`)
    expect(btn.length).toBe(2)
  })
})