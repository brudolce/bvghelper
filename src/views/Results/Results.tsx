import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { useHistory } from "react-router-dom";
import ResultsStyles from "./Results.styles";
import { resultProcessing } from "./resultProcessing";
import CoolButton from "../../components/CoolButton/CoolButton";

const Results: React.FC = () => {
  //redux util
  const store = useSelector(
    (reduxState: ApplicationState) => reduxState.answers.AnswersData
  );

  //router
  const history = useHistory();
  const changePage = (route: string): any => history.push(route);

  //styles
  const CSS = ResultsStyles.Factory();

  //component state, lyfecycle and data fetching
  const keys = Object.keys(store);
  const values = Object.values(store);
  const name = values.shift();
  keys.shift();

  useEffect(() => {
    if (keys.length === 0) changePage("/info");
  }, []);

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
        <div style={{ ...CSS.text(2, CSS.color0, CSS.color1), margin: "20px" }}>
          Hi {name}, thanks for answering some questions, here are your results:
        </div>
        <div>
          {values.map((el, index) => (
            <div key={index} style={{ margin: "10px" }}>
              {keys[index]}{" "}
              {typeof el === "object"
                ? Object.keys(el).map((key) => el[key] && key)
                : el}
            </div>
          ))}

          <div
            style={{ margin: "20px", ...CSS.text(1.5, CSS.color0, CSS.color1) }}
          >
            You Should buy the following ticket:
          </div>
          <div
            style={{
              margin: "0 0 30px 0",
              ...CSS.text(1.5, CSS.color2, CSS.color0),
            }}
          >
            {resultProcessing(store)}
          </div>
        </div>

        <CoolButton size={1} onClick={() => changePage("/info")}>
          Restart
        </CoolButton>
      </div>
    </div>
  );
};

export default Results;
