import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Div = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading_Animation = keyframes`
  0% {
    border-radius: 20%;
    transform-origin: calc(50% + 25px);
    transform: translate(-25px) rotate(calc(60deg * var(--i)));
  }
  80% {
    border-radius: 50%;
  }
  100% {
    border-radius: 100%;
    transform-origin: calc(50% + 100px);
    transform: translate(-100px) rotate(calc(360deg + 60deg * var(--i)));
  }
`;

const I = styled.i`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 0px;
  background: hsla(calc(50 + 15 * var(--i)), 80%, 50%, 1);
  transform-origin: calc(50% + 50px);
  transform: translate(-50px) rotate(calc(60deg * var(--i)));

  animation: ${Loading_Animation} 3s infinite alternate-reverse;
`;

export default function LoadingBox() {
  return (
    <Div>
      <I style={{ "--i": 0 }} />
      <I style={{ "--i": 1 }} />
      <I style={{ "--i": 2 }} />
      <I style={{ "--i": 3 }} />
      <I style={{ "--i": 4 }} />
      <I style={{ "--i": 5 }} />
    </Div>
  );
}
