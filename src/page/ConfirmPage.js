import { toKRW } from "Extra/Utils";
import { default as GLOBAL_VAR, default as GLOVAL_VAR } from "Extra/globalVar";
import usePage from "Hooks/usePage";
import axios from "axios";
import LoadingBox from "component/LoadingBox";
import { ButtonGroup, ContentBox, NavButton, Page } from "component/Styled";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import CompletePage from "./CompletePage";
import ProductPage from "./ProductPage";

const InfoGroup = styled.article`
  width: 90%;
  margin: 0px auto;

  & header {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    border-top: 1px solid hsla(0, 0%, 60%, 1);
    border-bottom: 1px solid hsla(0, 0%, 60%, 1);
  }
  & table {
    width: 100%;
  }
  & th,
  & td {
    height: 30px;
  }
  &.sender th,
  &.accepter th {
    width: 80px;
  }
  &.sender td,
  &.accepter td {
    text-align: left;
    padding-left: 10px;
  }
  & .product-row .product-price {
    min-width: 70px;
  }
  & .product-row .product-amount {
    min-width: 35px;
  }
`;

const SMS_SENDER_ENDPOINT =
  "https://if98is43fj.execute-api.ap-northeast-2.amazonaws.com";

export default function ConfirmPage() {
  const { setPage } = usePage();
  const [isLoading, setIsLoading] = useState(false);

  const onComplete = () => {
    setIsLoading(true);

    axios
      .post(SMS_SENDER_ENDPOINT, { smsContent: makeSMSContent() })
      .then((result) => {
        if (result.status !== 202) return console.log(result.data);
        setPage(<CompletePage />);
      })
      .catch((error) => {
        toast.error(error.toJSON().message);
        setIsLoading(false);
      });
  };

  return (
    <Page className="flex">
      <ContentBox>
        <InfoGroup className="sender">
          <header>보내는 사람</header>
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>{GLOVAL_VAR.sender.name}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{GLOVAL_VAR.sender.tel}</td>
              </tr>
            </tbody>
          </table>
        </InfoGroup>

        <div style={{ height: 30 }}></div>

        <InfoGroup className="accepter">
          <header>받는 사람</header>
          <table>
            <tbody>
              <tr>
                <th>이름</th>
                <td>{GLOVAL_VAR.accepter.name}</td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>{GLOVAL_VAR.accepter.tel}</td>
              </tr>
              <tr>
                <th>주소</th>
                <td style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  {GLOVAL_VAR.accepter.addr}
                </td>
              </tr>
              <tr>
                <th>상세주소</th>
                <td>{GLOVAL_VAR.accepter.addrDetail}</td>
              </tr>
            </tbody>
          </table>
        </InfoGroup>

        <div style={{ height: 30 }}></div>

        <InfoGroup className="product-list">
          <header>구매목록</header>
          <table>
            <thead>
              <tr>
                <th>상품명</th>
                <th>가격</th>
                <th>수량</th>
              </tr>
            </thead>
            <tbody>
              {GLOVAL_VAR.products
                .filter((product) => product.amount !== 0)
                .map((product) => (
                  <tr key={product.id} className="product-row">
                    <td>{product.name}</td>
                    <td className="product-price">
                      {toKRW(
                        product.isDiscount
                          ? product.sale_price
                          : product.origin_price
                      )}
                    </td>
                    <td className="product-amount">{product.amount}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </InfoGroup>

        <ButtonGroup>
          <NavButton
            type="button"
            bg="var(--primary-clr-light)"
            onClick={() => setPage(<ProductPage />)}
            children="이전"
          />
          <NavButton
            type="button"
            bg="var(--primary-clr)"
            onClick={onComplete}
            children="완료"
          />
        </ButtonGroup>
      </ContentBox>
      {isLoading && <LoadingBox />}
    </Page>
  );
}

const makeSMSContent = () => `
보내는 사람
이름 : ${GLOBAL_VAR.sender.name}
연락처 : ${GLOBAL_VAR.sender.tel}

받는 사람
이름 : ${GLOBAL_VAR.accepter.name}
연락처 : ${GLOBAL_VAR.accepter.tel}
주소 : ${GLOBAL_VAR.accepter.addr}
상세주소 : ${GLOBAL_VAR.accepter.addrDetail}

${GLOBAL_VAR.products
  .filter((product) => product.isEnable)
  .filter((product) => product.amount > 0)
  .map((product) => `${product.name} ${product.amount}`)
  .join("\n")}
`;
