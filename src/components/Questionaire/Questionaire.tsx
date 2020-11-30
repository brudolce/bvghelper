import React, { useState} from "react";
import QuestionaireStyles from "./Questionaire.styles";

interface QuestionaireProps {
  question: string;
  liftState: (formState: { value: Object }) => void;
  type: string;
  options?: Array<string>;
}

interface ChoicesInterface {
  [key: string]: boolean;
}

const Questionaire: React.FC<QuestionaireProps> = ({
  question = "",
  type = "text",
  options,
  liftState,
}: QuestionaireProps) => {
  //component state
  const [value, setValue] = useState("");
  const [choices, setChoices] = useState<ChoicesInterface>({});

  //component CSS
  const CSS = QuestionaireStyles.Factory();

  //component functions
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (type === "text") {
      liftState({ value });
    } else if (type === "number") {
      liftState({ value });
    } else if (type === "checkbox") {
      liftState({ value: choices });
    } else if (type === "radio") {
      liftState({ value: choices });
    }
    setValue("");
    setChoices({});
    event.target.reset();
  };

  return (
    <section style={CSS.questionaire()}>
      <div style={{ ...CSS.text(2, CSS.color0, CSS.color1), margin: "10px" }}>
        {question}
      </div>

      <div
        style={
          {
            ...CSS.text(1, CSS.color0, CSS.color1),
            margin: "40px",
            ...CSS.container(),
          } as React.CSSProperties
        }
      >
        <form onSubmit={handleSubmit} id="questForm">
          {type === "text" ? (
            <label>
              <input
                style={{ height: "20px" }}
                type={type}
                value={value}
                onChange={handleChange}
                required
              />
            </label>
          ) : type === "number" ? (
            <label>
              <input
                style={{ height: "20px" }}
                type={type}
                value={value}
                onChange={handleChange}
                required
              />
            </label>
          ) : type === "checkbox" ? (
            <div>
              {options?.map((el, index) => (
                <div key={index}>
                  <input
                    type={type}
                    value={el}
                    id={el + index}
                    onClick={() =>
                      setChoices({ ...choices, [el]: !choices[el] })
                    }
                  />
                  <label id={el + index}>{el}</label>
                </div>
              ))}
            </div>
          ) : type === "radio" ? (
            <div style={CSS.container()}>
              {options?.map((el, index) => (
                <div key={index} style={{ margin: "5px" }}>
                  <input
                    name={question}
                    type={type}
                    value={el}
                    id={el + index}
                    onClick={() => setChoices({ [el]: true })}
                    required
                  />
                  <label id={el + index}>{el}</label>
                </div>
              ))}
            </div>
          ) : (
            <div />
          )}
          <div style={CSS.container()}>
            <input
              style={{ margin: "20px", ...CSS.coolButton(1) }}
              type="submit"
              value="Next"
              onSubmit={handleSubmit}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Questionaire;
