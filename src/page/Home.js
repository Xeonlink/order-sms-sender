import usePage from "Hooks/usePage";
import { Page, TunedNavButton, TunedSlider } from "component/Styled";
import IMG_HOME1 from "img/home1.jpg";
import IMG_HOME2 from "img/home2.jpg";
import IMG_HOME3 from "img/home3.jpg";
import styled from "styled-components";
import SenderPage from "./SenderPage";

const Img = styled.img`
  max-width: 90vw;
  height: calc(100vh - 70px);
  margin: 0px 5px;

  object-fit: contain;
`;

export default function Home() {
  const { setPage } = usePage();

  return (
    <Page>
      <TunedSlider
        infinite
        speed={1000}
        centerMode
        centerPadding="0px"
        arrows={false}
        autoplay
        autoplaySpeed={5000}
        variableWidth
      >
        <Img src={IMG_HOME1} alt="배경이미지" />
        <Img src={IMG_HOME2} alt="배경이미지" />
        <Img src={IMG_HOME3} alt="배경이미지" />
      </TunedSlider>

      <TunedNavButton
        type="button"
        onClick={() => setPage(<SenderPage />)}
        children="주문하기"
      />
    </Page>
  );
}
