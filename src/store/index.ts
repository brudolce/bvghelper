import { createStore, Store } from 'redux';
import { AnswersState } from './ducks/answers/types';
import rootreducer from './ducks/rootReducer';

export interface ApplicationState {
  answers: AnswersState;
}

const store: Store = createStore(rootreducer);

export default store;
