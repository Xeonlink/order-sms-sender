import slider from "react-slick/lib/slider";
import styled from "styled-components";

export const Page = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 100vh;

  overflow: auto;
  background: var(--bg-clr);
`;

export const TunedSlider = styled(slider)`
  width: 100%;

  & .slick-slider {
    display: contents;
  }
  & .slick-list {
    height: 100%;
  }
  & .slick-track {
    display: flex;
  }
  & .slick-slide {
    filter: blur(2px);
  }
  & .slick-slide > div {
    display: flex;
  }
  & .slick-slide > div > * {
    margin-right: auto;
    margin-left: auto;
  }
  & .slick-slide.slick-active {
    filter: none;
    /* border: 1px solid rgba(255, 127, 0); */
    /* border-radius: 10px; */
  }
`;

export const ContentBox = styled.div`
  margin: auto;
  padding: 10px 0px;
  max-width: 450px;
  width: 100%;

  overflow: visible;
`;

export const ButtonGroup = styled.div`
  margin-top: 50px;

  display: flex;
  justify-content: space-evenly;
`;

export const NavButton = styled.button`
  width: 40%;
  max-width: 250px;
  height: 50px;

  cursor: pointer;
  border: none;
  border-radius: 1000px;
  background: ${(props) => props.bg || "green"};
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const TunedNavButton = styled(NavButton)`
  width: 80%;
  height: 50px;
  margin: 10px auto;
`;

export const InputGroup = styled.div`
  margin-top: 50px;
`;

export const Input = styled.input`
  all: unset;
  width: 80%;
  height: 60px;

  font-size: 18px;
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 60%, 1);
`;

export const H1 = styled.h1`
  margin: 0px auto;
  width: 80%;
`;

export const FnButton = styled.button`
  display: block;
  height: 30px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 0px 30px;

  cursor: pointer;
  border-radius: 1000px;
  border: 1px dashed black;
  outline: none;

  &:active {
    border: 2px dashed var(--primary-clr-light);
  }
`;
