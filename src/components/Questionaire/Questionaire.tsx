import React, { useState } from "react";
import CoolButton from "../CoolButton/CoolButton";
import QuestionaireStyles from "./Questionaire.styles";

interface QuestionaireProps {
  question: string;
  answerSpec: string;
  liftState: (formState:{value:any,bool:boolean}) => void;
  type: string;
}

const Questionaire: React.FC<QuestionaireProps> = ({
  question = "",
  answerSpec = "",
  type = "text",
  liftState,
}: QuestionaireProps) => {
  

  //component state
  const [value, setValue] = useState("");
  const [bool, setBool] = useState(false)

  //component CSS
  const CSS = QuestionaireStyles.Factory();

  //component functions
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    liftState({value,bool})
  };

  return (
    <section style={CSS.questionaire()}>
      <div style={CSS.text(2, CSS.color2)}>{question}</div>

      <div
        style={
          {
            ...CSS.text(1, CSS.color0, CSS.color1),
            margin: "40px",
            ...CSS.container(),
          } as React.CSSProperties
        }
      >
        <form onSubmit={handleSubmit}>
          <label>
            { type==='checkbox' ?
            <input type={type} value={value} onClick={()=>setBool(!bool)} onKeyDown={(event)=> event.key === "Enter" && console.log('heyhoo')} />
            :
            <input type={type} value={value} onChange={handleChange} />
            }
          </label>
        </form>
        <div style={{ marginLeft: "10px" }}>{answerSpec}</div>
      </div>
      
      <CoolButton size={2} onClick={handleSubmit}>Next</CoolButton>
      
    </section>
  );
};

export default Questionaire;
