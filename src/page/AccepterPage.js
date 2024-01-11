import { makeRoadAddrMoreShort, setTelHyphen } from "Extra/Utils";
import GLOBAL_VAR from "Extra/globalVar";
import useForm from "Hooks/useForm";
import usePage from "Hooks/usePage";
import {
  ButtonGroup,
  ContentBox,
  FnButton,
  H1,
  Input,
  InputGroup,
  NavButton,
  Page,
} from "component/Styled";
import ProductPage from "page/ProductPage";
import SenderPage from "page/SenderPage";
import { toast } from "react-toastify";
import AddrSearchPage from "./AddrSearchPage";

export default function AccepterPage() {
  const { openPage, setPage } = usePage();
  const { data: accepter, handleChange } = useForm(GLOBAL_VAR.accepter);

  const openAddrSearchPage = () => {
    openPage(
      <AddrSearchPage
        onComplete={(data) =>
          handleChange("addr", makeRoadAddrMoreShort(data.roadAddress))
        }
      />
    );
  };

  return (
    <Page className="flex">
      <ContentBox>
        <H1>받는 사람</H1>

        <FnButton
          type="button"
          onClick={() => handleChange("set", GLOBAL_VAR.sender)}
          children="보내는 사람과 동일"
        />

        {GLOBAL_VAR.previousComplete !== null && (
          <FnButton
            type="button"
            onClick={() => {
              handleChange("set", GLOBAL_VAR.previousComplete.accepter);
            }}
            children="이전주문과 동일"
          />
        )}

        <InputGroup>
          <Input
            type="text"
            name="name"
            value={accepter.name}
            onChange={handleChange}
            placeholder="이름 (ex: 홍길동)"
            autoComplete="off"
          />
          <Input
            type="tel"
            name="tel"
            value={accepter.tel}
            onChange={(e) => handleChange(e, setTelHyphen)}
            placeholder="연락처 (ex: 010-1234-1234)"
            autoComplete="off"
          />
          <Input
            type="text"
            name="addr"
            value={accepter.addr}
            onChange={handleChange}
            onClick={openAddrSearchPage}
            placeholder="주소 (ex: 남원월산로74번길 42)"
            autoComplete="off"
          />
          <Input
            type="text"
            name="addrDetail"
            value={accepter.addrDetail}
            onChange={handleChange}
            placeholder="상세주소 (ex: 단독주택)"
            autoComplete="off"
          />
        </InputGroup>

        <ButtonGroup>
          <NavButton
            type="button"
            bg="var(--primary-clr-light)"
            onClick={() => {
              GLOBAL_VAR.accepter = accepter;
              setPage(<SenderPage />);
            }}
            children="이전"
          />
          <NavButton
            type="button"
            bg="var(--primary-clr)"
            onClick={() => {
              if (accepter.name.trim() === "")
                return toast.error("이름을 입력하세요.");
              if (accepter.tel.trim() === "")
                return toast.error("연락처를 입력하세요.");
              if (accepter.addr.trim() === "")
                return toast.error("주소를 입력하세요.");
              if (accepter.addrDetail.trim() === "")
                return toast.error("상세주소를 입력하세요.");

              GLOBAL_VAR.accepter = accepter;
              setPage(<ProductPage />);
            }}
            children="다음"
          />
        </ButtonGroup>
      </ContentBox>
    </Page>
  );
}
