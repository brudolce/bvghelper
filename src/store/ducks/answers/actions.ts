/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { AnswersTypes } from './types';

export const setAnswersData = (payload: Object) =>
  action(AnswersTypes.setAnswersData, payload);


