import { keyframes } from "styled-components";

export const slideRight = keyframes`
  0% {
    -webkit-transform: translateX(-240px);
            transform: translateX(-240px);
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
`;
