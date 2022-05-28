import React from "react";
import styled from "styled-components";

const Button = styled.button`
  color: var(--primary-clr-light);
  background: var(--primary-clr);
  transition: var(--trans-duration);
  cursor: pointer;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: bold;

  &:hover,
  &:focus {
    background: var(--second-clr);
  }
`;

const Img = styled.img`
  height: 60%;
  margin-right: 5px;

  display: inline-block;
  vertical-align: bottom;
`;

export default function IcoButton(props) {
  const { src, alt, text, ...otherProps } = props;

  return (
    <Button {...otherProps}>
      {src && alt && <Img src={src} alt={alt} />}
      {text}
    </Button>
  );
}
