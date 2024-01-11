import GLOBAL_VAR, { resetGLOBAL_VAR } from "Extra/globalVar";
import usePage from "Hooks/usePage";
import { ButtonGroup, ContentBox, H1, NavButton, Page } from "component/Styled";
import Home from "./Home";

export default function CompletePage() {
  const { setPage } = usePage();

  const gotoHome = () => {
    GLOBAL_VAR.previousComplete = {
      sender: GLOBAL_VAR.sender,
      accepter: GLOBAL_VAR.accepter,
    };
    resetGLOBAL_VAR();
    setPage(<Home />);
  };

  return (
    <Page className="flex">
      <ContentBox>
        <H1>주문이 완료되었습니다.</H1>
        <ButtonGroup>
          <NavButton
            type="button"
            bg="var(--primary-clr)"
            onClick={gotoHome}
            children="처음으로"
          />
        </ButtonGroup>
      </ContentBox>
    </Page>
  );
}
