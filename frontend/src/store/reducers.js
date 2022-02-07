import * as actionType from './actions';
const initialState = {
  value: 0,
  questionOne: {
    title: 'Email',
    response: ''
  },
  questionTwo: {
    title: 'Project Description',
    response: ''
  },
  questionThree: {
    title: 'Price Range',
    response: ''
  },
  questionFour: {
    title: 'Upload Files',
    response: []
  },
  questionFive: {
    title: 'Requested Services',
    response: []
  },
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
        questionOne: {
          ...state.questionOne,
          response: action.payload
        }
      }
    case actionType.UPDATESQUESTIONTWO:
      return {
        ...state,
        questionTwo: {
          ...state.questionTwo,
          response: action.payload
        }
      }
    case actionType.UPDATESQUESTIONTHREE:
      return {
        ...state,
        questionThree: {
          ...state.questionThree,
          response: action.payload
        }
      }
    case actionType.UPDATESQUESTIONFOUR:
      return {
        ...state,
        questionFour: {
          ...state.questionFour,
          response: [...state.questionFour.response, action.payload]
        }
      }
    case actionType.CLEARQUESTIONFOUR:
      return {
        ...state,
        questionFour: {
          ...state.questionFour,
          response: []
        }
      }
    case actionType.ADDTOQUESTIONFIVE:
      return {
        ...state,
        questionFive: {
          ...state.questionFive,
          response: [...state.questionFive.response, action.payload]
        }
      }
    case actionType.REMOVEFROMQUESTIONFIVE:
      return {
        ...state,
        questionFive: {
          ...state.questionFive,
          response: action.payload
        }
      }
    case actionType.CLEARQUESTIONFIVE:
      return {
        ...state,
        questionFive: {
          ...state.questionFive,
          response: []
        }
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