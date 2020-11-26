import React from "react";
import { useHistory } from "react-router-dom";
import AppStyles from "../../App.styles";
import CoolButton from "../../components/CoolButton/CoolButton";

const Home: React.FC = () => {
  const CSS = AppStyles.factory();

  const history = useHistory();
  const changePage = (route:string): any => history.push(route);

  return (
    <div
      style={
        {
          ...CSS.page(),
          background: `linear-gradient(-60deg, ${CSS.color2} 15%, rgba(0, 0, 0, 0) 15%), url("https://www.tripsavvy.com/thmb/oG4SasfK-ZiFy0JL2c-Vn9IusXM=/2121x1193/smart/filters:no_upscale()/BerlinalexanderplatztramGettyImages-505760692fhm-5b36971e46e0fb0037a2261e.jpg")`,
        } as React.CSSProperties
      }
    >
      <div style={CSS.container("column") as React.CSSProperties}>
        <div style={CSS.text(3)}>
          Hello fellow tourist, I am here to help you to choose the best BVG
          options during your stay in Berlin
        </div>

        <div style={{ margin: "40px" }}>
          <CoolButton size={2} onClick={()=>changePage("/info")}>Start</CoolButton>
        </div>
      </div>
    </div>
  );
};

export default Home;
