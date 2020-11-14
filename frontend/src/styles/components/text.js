import styled from "styled-components";
import fontSize from "../typography";
import color from "../color";

export const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: ${(props) => (props.large ? fontSize[4] : fontSize[3])};
  line-height: 29px;
  margin: 0;
  padding: 0;
  color: ${props=>props.color || color.darkPurple};;
`;
export const H3 = styled.h3`
  font-size: ${fontSize[2]};
  line-height: 22px;
  margin: 0;
  padding: 0;
  color: ${props=>props.color || color.darkPurple};;
`;
export const H4 = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${props=>props.color || color.darkPurple};
`;
export const P = styled.p`
  font-size: ${fontSize[1]};
  font-weight: 600;
  line-height: 14px;
  margin: 0;
  padding: 0;
  color: ${props=>props.color || color.darkPurple};
  text-transform: uppercase;
`;