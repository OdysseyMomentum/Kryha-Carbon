import styled from "styled-components";
import fontSize from "../typography";
import * as themeConf from "../theme";

export const H1 = styled.h1`
  font-family: Inter;
  font-size: ${(props) => (props.large ? fontSize[4] : fontSize[3])};
  line-height: 29px;
  margin: 0;
  padding: 0;
  color: ${themeConf.text};
`;
export const H3 = styled.h3`
  font-size: ${fontSize[2]};
  line-height: 22px;
  margin: 0;
  padding: 0;
  color: ${themeConf.text};
`;
export const H4 = styled.h4`
  font-family: Exo 2;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #00aefc;
`;
export const P = styled.p`
  font-size: ${fontSize[1]};
  font-weight: 600;
  line-height: 14px;
  margin: 0;
  padding: 0;
  color: ${themeConf.text};
  text-transform: uppercase;
`;
export const H1_S = styled(H1)`
  color: ${themeConf.textSecondary};
`;
export const H3_S = styled(H3)`
  color: ${themeConf.textSecondary};
`;
export const P_S = styled(P)`
  color: ${themeConf.textSecondary};
`;
export const H1_BLUE = styled(H1)`
  color: ${themeConf.blue};
`;
export const H1_RED = styled(H1)`
  color: ${themeConf.errorColor};
`;
export const P_BLUE = styled(P)`
  color: ${themeConf.blue};
`;
export const H3_ELLIPSIS = styled(H3)`
  text-overflow: ellipsis;
  overflow: hidden;
`;
