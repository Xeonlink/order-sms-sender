import { toKRW, toNum } from "Extra/Utils";
import GLOBAL_VAR from "Extra/globalVar";
import usePage from "Hooks/usePage";
import Counter from "component/Counter";
import {
  ButtonGroup,
  ContentBox,
  NavButton,
  Page,
  TunedSlider,
} from "component/Styled";
import IMG_DISCOUNT from "img/discount.svg";
import AccepterPage from "page/AccepterPage";
import ConfirmPage from "page/ConfirmPage";
import { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

const ProductCard = styled.article`
  position: relative;
  max-width: 90vw;
  padding: 0px 5px;

  & .sale-img {
    position: absolute;
    left: 0px;
    top: 0px;
    margin: 5px 0 0 5px;
    width: 25%;
  }
  & .product-img {
    width: 100%;
    border-radius: 20px;
  }
  & .product-name {
    width: 100%;
    margin: 0px;
    padding: 10px 0px;
    border-bottom: 1px solid hsla(0, 0%, 60%, 1);
    font-size: 20px;
    font-weight: bold;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & .product-detail {
    display: grid;
    grid-template-columns: auto auto;
    grid-auto-rows: 30px;
    justify-items: center;
    align-items: center;
  }
  & .product-detail strong {
    font-weight: normal;
    color: red;
  }
`;

export default function ProductPage() {
  const { setPage } = usePage();
  const [products, setProducts] = useState(GLOBAL_VAR.products);

  const amountHandler = (product, value) => {
    if (value < 0 || 99 < value) return;
    const amount = toNum(value);
    if (amount < 0 || 99 < amount) return;
    product.amount = amount || 0;
    setProducts([...products]);
  };

  // toast.success("가정용 한라봉 입니다.");

  return (
    <Page className="product-page flex">
      <ContentBox>
        <TunedSlider
          infinite={false}
          centerMode
          centerPadding="0px"
          arrows={false}
          variableWidth
          adaptiveHeight
        >
          {products
            .filter((product) => product.isEnable)
            .map((product) => (
              <ProductCard key={product.id} style={{ width: "300px" }}>
                {product.isDiscount && (
                  <img className="sale-img" src={IMG_DISCOUNT} alt="할인중" />
                )}
                <img
                  className="product-img"
                  src={product.img}
                  alt="상품이미지"
                />
                <header className="product-name">{product.name}</header>
                <div className="product-detail">
                  <b>판매가격</b>
                  {product.isDiscount ? (
                    <span>
                      <del>{toKRW(product.origin_price)}</del>
                      {" => "}
                      <strong>{toKRW(product.sale_price)}</strong>
                    </span>
                  ) : (
                    <strong>{toKRW(product.origin_price)}</strong>
                  )}

                  <b>원산지</b>
                  <span>서귀포시 남원읍</span>

                  <b>배송비</b>
                  <strong>전국 무료배송</strong>

                  <b>구매수량</b>
                  <Counter
                    value={product.amount.toString()}
                    placeholder="구매수량"
                    onChange={(e) => amountHandler(product, e.target.value)}
                    onMinus={() => amountHandler(product, product.amount - 1)}
                    onPlus={() => amountHandler(product, product.amount + 1)}
                  />
                </div>
              </ProductCard>
            ))}
        </TunedSlider>

        <ButtonGroup>
          <NavButton
            type="button"
            bg="var(--primary-clr-light)"
            onClick={() => setPage(<AccepterPage />)}
            children="이전"
          />
          <NavButton
            type="button"
            bg="var(--primary-clr)"
            onClick={() => {
              if (products.every((product) => product.amount === 0))
                return toast.error("선택된 상품이 없습니다.");

              setPage(<ConfirmPage />);
            }}
            children="다음"
          />
        </ButtonGroup>
      </ContentBox>
    </Page>
  );
}
