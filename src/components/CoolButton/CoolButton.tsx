import React from "react";
import CoolButtonStyles from "./CoolButton.styles";

interface CoolButtonProps {
  children: any;
  onClick: (event:any) => any;
  size:number
}

const CoolButton: React.FC<CoolButtonProps> = ({
  children = "button",
  size = 2,
  onClick,
}: CoolButtonProps) => {
  const CSS = CoolButtonStyles.Factory();

  return (
    <>
      <button style={CSS.coolButton(size)} type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default CoolButton;
