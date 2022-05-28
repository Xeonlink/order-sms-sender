import React from "react";
import IMG_MINUS from "img/minus.svg";
import IMG_PLUS from "img/plus.svg";
import styled from "styled-components";

const Span = styled.span`
  /* width: 100%; */
  height: 30px;

  display: inline-flex;
  justify-content: center;

  & input {
    all: unset;
    display: block;
    flex: 1;
    max-width: 60px;

    text-align: center;
  }
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }
  & input[type="number"] {
    -moz-appearance: textfield;
  }
  & button {
    all: unset;
    width: 40px;

    border: none;
    border-radius: 1000px;
  }
  & button:first-of-type {
    background: var(--primary-clr-light);
  }
  & button:last-of-type {
    background: var(--primary-clr);
  }
  & img {
    width: 100%;
    height: 70%;
  }
`;

export default function Counter({
  value,
  placeholder,
  onChange,
  onMinus,
  onPlus,
}) {
  return (
    <Span>
      <button type="button" onClick={onMinus}>
        <img src={IMG_MINUS} alt="수량빼기" />
      </button>
      <input
        type="number"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onPlus}>
        <img src={IMG_PLUS} alt="수량추가" />
      </button>
    </Span>
  );
}
