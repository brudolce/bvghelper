import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import AppStyles from "../../App.styles";
import Questionaire from "../../components/Questionaire/Questionaire";
import { setAnswersData } from "../../store/ducks/answers/actions";

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

  //component state and lyfecycle
  const [questionNumber, setQuestionNumber] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    setData(state.AnswersData);
  }, []);

  useEffect(() => {
    if (questionNumber > 2) {
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
      {questionNumber === 0 ? (
        <Questionaire
          type="text"
          question="What is your name?"
          answerSpec=""
          liftState={(formState: { value: any; bool: boolean }) => {
            setData({ ...data, name: formState.value });
            setQuestionNumber(1);
          }}
        />
      ) : questionNumber === 1 ? (
        <Questionaire
          type="number"
          question="How much time are you planning on staying in the city"
          answerSpec="weeks"
          liftState={(formState: { value: any; bool: boolean }) => {
            setData({ ...data, time: formState.value });
            setQuestionNumber(2);
          }}
        />
      ) : (
        <Questionaire
          type="checkbox"
          question="Are you planning to traffic in the city center?"
          answerSpec=""
          liftState={async (formState: { value: any; bool: boolean }) => {
            setData({ ...data, center: formState.bool });
            setQuestionNumber(3);
          }}
        />
      )}
    </div>
  );
};

export default Info;
