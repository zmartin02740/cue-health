import * as actionType from './actions';
const initialState = {
  value: 0,
  questionOne: '',
  questionTwo: '',
  questionThree: '',
  questionFour: [],
  questionFive: [],
  responses: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.INCREASE:
      return {
        ...state,
        value: state.value + 1
      }
    case actionType.DECREASE:
      return {
        ...state,
        value: state.value - 1
      }
    case actionType.ZERO:
      return {
        ...state,
        value: 0
      }
    case actionType.UPDATESQUESTIONONE:
      return {
        ...state,
        questionOne: action.payload
      }
    case actionType.UPDATESQUESTIONTWO:
      return {
        ...state,
        questionTwo: action.payload
      }
    case actionType.UPDATESQUESTIONTHREE:
      return {
        ...state,
        questionThree: action.payload
      }
    case actionType.UPDATESQUESTIONFOUR:
      return {
        ...state,
        questionFour: [...state.questionFour, action.payload]
      }
    case actionType.CLEARQUESTIONFOUR:
      return {
        ...state,
        questionFour: []
      }
    case actionType.ADDTOQUESTIONFIVE:
      return {
        ...state,
        questionFive: [...state.questionFive, action.payload]
      }
    case actionType.REMOVEFROMQUESTIONFIVE:
      return {
        ...state,
        questionFive: action.payload
      }
    case actionType.CLEARQUESTIONFIVE:
      return {
        ...state,
        questionFive: []
      }
    case actionType.UPDATERESPONSES:
      return {
        ...state,
        responses: [...state.responses, action.payload]
      }
    default:
      return state
  }
}
export default reducer;