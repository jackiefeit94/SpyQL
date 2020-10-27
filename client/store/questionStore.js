import level1Q from '../questions/level1Q'
import level2Q from '../questions/level2Q'
import level3Q from '../questions/level3Q'

const FETCH_QUESTIONS = 'FETCH_QUESTIONS'

/* action creator */
const fetchQuestions = (questions, level) => ({
  type: FETCH_QUESTIONS,
  questions,
  level
})

export const getLevelOneQuestions = () => {
  return dispatch => {
    const questions = level1Q
    const level = 1
    dispatch(fetchQuestions(questions, level))
  }
}

export const getLevelTwoQuestions = () => {
  return dispatch => {
    const questions = level2Q
    const level = 2
    dispatch(fetchQuestions(questions, level))
  }
}

export const getLevelThreeQuestions = () => {
  return dispatch => {
    const questions = level3Q
    const level = 3
    dispatch(fetchQuestions(questions, level))
  }
}

export const getVictoryLevel = () => {
  return dispatch => {
    const questions = []
    const level = 0
    dispatch(fetchQuestions(questions, level))
  }
}

const initialState = {allQs: [], level: 0}

export default function questionReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {...state, allQs: action.questions, level: action.level}
    default:
      return state
  }
}
