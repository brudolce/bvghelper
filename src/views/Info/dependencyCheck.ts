interface Question {
  type: string;
  question: string;
  options: Array<string>;
  depends?: any;
}

export const depedencyCheck = (
  question: Question,
  state: any,
  fn: () => void
): boolean | void => {
  const depedency = question?.depends;
  const next = !(state[depedency] && state[depedency]["No"]);

  return next ? next : fn();
};
