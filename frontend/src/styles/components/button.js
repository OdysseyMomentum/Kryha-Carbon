import styled from "styled-components";
// styles
import color from "../color";
import fontSize from "../typography";
import elevation from "../elevation";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Exo 2", sans-serif;
  font-size: ${fontSize[1]};
  border-radius: 4px;
  padding: 8px 24px;
  border: none;
  cursor: pointer;
  :hover {
    box-shadow: ${elevation[1]};
  }
`;
export const ButtonPrimary = styled(Button)`
  color: ${color.white};
  background-color: ${color.lightBlue};
  :active {
    background-color: ${color.blueGreen};
  }
  :disabled {
    background-color: ${color.grey};
  }
`;

export const ButtonTertiary = styled(Button)`
  background-color: transparent;
  color: ${color.lightBlue};
  border: none;
  :hover {
    box-shadow: none;
    border-color: ${color.blueGreen};
  }
  :active {
    box-shadow: none;
    border-color: ${color.blueGreen};
  }
  :focus {
    box-shadow: none;
    border-color: ${color.blueGreen};
  }
  :disabled {
    border-color: ${color.grey};
  }
`;
