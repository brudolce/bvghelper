import { Reducer } from 'redux';
import { AnswersState, AnswersTypes } from './types';

const INITIAL_STATE: AnswersState = { AnswersData: {} };
const reducer: Reducer<AnswersState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AnswersTypes.setAnswersData:
      return { ...state, AnswersData: payload };
    default:
      return state;
  }
};

export default reducer;
