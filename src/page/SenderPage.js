import { setTelHyphen } from "Extra/Utils";
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
import Home from "page/Home";
import { toast } from "react-toastify";
import AccepterPage from "./AccepterPage";

export default function SenderPage() {
  const { setPage } = usePage();
  const { data: sender, handleChange } = useForm(GLOBAL_VAR.sender);

  return (
    <Page className="flex">
      <ContentBox>
        <H1>보내는 사람</H1>

        {GLOBAL_VAR.previousComplete !== null && (
          <FnButton
            type="button"
            onClick={() => {
              handleChange("set", GLOBAL_VAR.previousComplete.sender);
            }}
            children="이전주문과 동일"
          />
        )}

        <InputGroup>
          <Input
            type="text"
            name="name"
            value={sender.name}
            onChange={handleChange}
            placeholder="이름 (ex: 홍길동)"
            autoComplete="off"
          />
          <Input
            type="tel"
            name="tel"
            value={sender.tel}
            onChange={(e) => handleChange(e, setTelHyphen)}
            placeholder="연락처 (ex: 010-1234-1234)"
            autoComplete="off"
          />
        </InputGroup>

        <ButtonGroup>
          <NavButton
            type="button"
            bg="var(--primary-clr-light)"
            onClick={() => {
              GLOBAL_VAR.sender = sender;
              setPage(<Home />);
            }}
            children="이전"
          />
          <NavButton
            type="button"
            bg="var(--primary-clr)"
            onClick={() => {
              if (sender.name.trim() === "")
                return toast.error("이름을 입력하세요.");
              if (sender.tel.trim() === "")
                return toast.error("연락처를 입력하세요.");

              GLOBAL_VAR.sender = sender;
              setPage(<AccepterPage />);
            }}
            children="다음"
          />
        </ButtonGroup>
      </ContentBox>
    </Page>
  );
}
