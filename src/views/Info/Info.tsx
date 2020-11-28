import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import AppStyles from "../../App.styles";
import Questionaire from "../../components/Questionaire/Questionaire";
import { setAnswersData } from "../../store/ducks/answers/actions";
import jsonfile from "./questions.json";

const Info: React.FC = () => {
  //redux util
  const dispatch = useDispatch();
  const state = useSelector(
    (reduxState: ApplicationState) => reduxState.answers
  );

  //styles
  const CSS = AppStyles.factory();

  //router
  const history = useHistory();
  const changePage = (route: string): any => history.push(route);

  //component state, lyfecycle and data fetching
  const [questionNumber, setQuestionNumber] = useState(0);
  const [data, setData] = useState({});
  const questions = jsonfile.questions;
  const question = questions[questionNumber];

  useEffect(() => {
    setData(state.AnswersData);
  }, []);

  useEffect(() => {
    if (questionNumber > questions.length - 1) {
      dispatch(setAnswersData(data));
      changePage("/results");
    }
  }, [questionNumber]);

  return (
    <div
      style={
        {
          ...CSS.page(),
          background: `linear-gradient(-60deg, ${CSS.color2} 15%, rgba(0, 0, 0, 0) 15%), url("https://www.tripsavvy.com/thmb/oG4SasfK-ZiFy0JL2c-Vn9IusXM=/2121x1193/smart/filters:no_upscale()/BerlinalexanderplatztramGettyImages-505760692fhm-5b36971e46e0fb0037a2261e.jpg")`,
        } as React.CSSProperties
      }
    >
      {questionNumber <= questions.length - 1 && (
        <Questionaire
          type={question.type}
          question={question.question}
          answerSpec={question.answerSpec}
          liftState={(formState: { value: any; bool: boolean }) => {
            setData({ ...data, name: formState.value, center: formState.bool });
            setQuestionNumber(questionNumber + 1);
          }}
        />
      )}
    </div>
  );
};

export default Info;
