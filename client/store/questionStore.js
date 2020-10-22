import level1Q from '../questions/level1Q'
import level2Q from '../questions/level2Q'
import level3Q from '../questions/level3Q'

const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

const fetchQuestions = questions => ({type: FETCH_QUESTIONS, questions})

export const getLevelOneQuestions = () => {
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

export const getLevelThreeQuestions = () => {
  return dispatch => {
    const questions = level3Q
    dispatch(fetchQuestions(questions))
  }
}

const initialState = {allQs: [], currentQ: {}}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {...state, allQs: action.questions}
    default:
      return state
  }
}
