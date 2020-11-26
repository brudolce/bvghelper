import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { useHistory } from "react-router-dom";
import ResultsStyles from "./Results.styles";
import { decision } from "./decisionTree";
import CoolButton from "../../components/CoolButton/CoolButton";

const Results: React.FC = () => {
  //redux util
  const store = useSelector(
    (reduxState: ApplicationState) => reduxState.answers.AnswersData
  );

  const CSS = ResultsStyles.Factory();

  const history = useHistory();
  const changePage = (route: string): any => history.push(route);

  return (
    <div
      style={
        {
          ...CSS.page(),
          background: `linear-gradient(-60deg, ${CSS.color2} 15%, rgba(0, 0, 0, 0) 15%), url("https://www.tripsavvy.com/thmb/oG4SasfK-ZiFy0JL2c-Vn9IusXM=/2121x1193/smart/filters:no_upscale()/BerlinalexanderplatztramGettyImages-505760692fhm-5b36971e46e0fb0037a2261e.jpg")`,
        } as React.CSSProperties
      }
    >
      <div style={CSS.display()}>
        <div>
          <div style={{ ...CSS.text(1.5, CSS.color2), margin: "10px" }}>
            Hi {store.name}, thanks for answering some questions, here are your
            Results:
          </div>
          <div style={{ margin: "10px" }}>
            - You are going to stay {store.time} weeks in Berlin
          </div>
          <div style={{ margin: "10px" }}>
            - And you are {!store.center && "not"} going to traffic in the city
            center
          </div>

          <div
            style={{ margin: "20px", ...CSS.text(2, CSS.color0, CSS.color2) }}
          >
            {" "}
            {decision(store)}
          </div>
        </div>

        <CoolButton size={1} onClick={() => changePage("/info")}>Restart</CoolButton>
      </div>
    </div>
  );
};

export default Results;
