import { Page, TunedNavButton } from "component/Styled";
import usePage from "Hooks/usePage";
import DaumPostcode from "react-daum-postcode";

export default function AddrSearchPage({ onComplete, pageID }) {
  const { closePage } = usePage();

  return (
    <Page>
      <DaumPostcode
        scriptUrl="https://daumpostcode-script-cdn.s3.ap-northeast-2.amazonaws.com/postcode.js"
        style={{ height: "calc(100vh - 70px)" }}
        onComplete={onComplete}
        onClose={() => closePage(pageID)}
      />
      <TunedNavButton
        type="button"
        bg="var(--primary-clr-light)"
        onClick={() => closePage(pageID)}
        children="닫기"
      />
    </Page>
  );
}
