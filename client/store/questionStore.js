import level1Q from '../questions/level1Q'

const GET_QUESTION = 'GET_QUESTION'

let idx = 0

const getQuestion = question => ({type: GET_QUESTION, question})

export const fetchQuestion = () => {
  return dispatch => {
    const question = level1Q[0]
    dispatch(getQuestion(question))
  }
}

const currentQ = {}

export default function questionReducer(state = currentQ, action) {
  switch (action.type) {
    case GET_QUESTION:
      return action.question
    default:
      return state
  }
}
