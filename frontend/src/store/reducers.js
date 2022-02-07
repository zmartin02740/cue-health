import * as actionType from './actions';
const initialState = {
  value: 0
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
    default:
      return state
  }
}
export default reducer;