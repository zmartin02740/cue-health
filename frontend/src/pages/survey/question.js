import React from 'react'
import CheckboxInput from '../../common/CheckboxInput'
import ImageInput from '../../common/ImageInput'
import SelectInput from '../../common/SelectInput'
import TextareaInput from '../../common/TextareaInput'
import TextInput from '../../common/TextInput'

export default ({ currentState, question }) => {
  const questionInputHandler = (questionObj) => {
    let input
    switch (questionObj.type) {
      case 0:
        input = <CheckboxInput question={questionObj} />
        break;
      case 1:
        input = <ImageInput question={questionObj} />
        break;
      case 2:
        input = <SelectInput question={questionObj} />
        break;
      case 3:
        input = <TextareaInput question={questionObj} />
        break;
      case 4:
        input = <TextInput question={questionObj} />
        break;
    }
    return input
  }


  return questionInputHandler(question)
}