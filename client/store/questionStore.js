import level1Q from '../questions/level1Q'
import level2Q from '../questions/level2Q'

const GET_QUESTION = 'GET_QUESTION'
const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

const getQuestion = question => ({type: GET_QUESTION, question})
const fetchQuestions = questions => ({type: FETCH_QUESTIONS, questions})

export const fetchQuestion = () => {
  return dispatch => {
    const question = level1Q[0]
    dispatch(getQuestion(question))
  }
}

export const getAllQuestions = () => {
  return dispatch => {
    const questions = level1Q
    dispatch(fetchQuestions(questions))
  }
}

export const getLevelTwoQuestions = () => {
  return dispatch => {
    const questions = level2Q
    dispatch(fetchQuestions(questions))
  }
}

const initialState = {allQs: [], currentQ: {}}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTION:
      return {...state, currentQ: action.question}
    case FETCH_QUESTIONS:
      return {...state, allQs: action.questions}
    default:
      return state
  }
}
