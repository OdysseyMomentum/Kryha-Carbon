import styled from "styled-components";
// styles
import color from "../color";
import fontSize from "../typography";

const Button = styled.button`
  display: flex;
  align-items: center;
  font-family: 'Inter', sans-serif;
  justify-content: center;
  font-size: ${fontSize[1]};
  border-radius: 3px;
  padding: 17px 32px;
  background-color: transparent;
  color: ${color.darkPurple};
  border: 1px solid;
  cursor: pointer;
`;
export const ButtonPrimary = styled(Button)`
  
`;

export const ButtonTertiary = styled(Button)`
  background-color: ${color.darkPurple};
  color: ${color.lightPurple};
  border: 1px solid ${color.darkPurple};
  :hover {
    box-shadow: none;
    border-color: ${color.neon};
  }
  :disabled {
    border-color: ${color.grey};
  }
`;
