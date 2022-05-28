import IMG_PRODUCT from "img/product/한라봉.jpg";

const GLOBAL_VAR = {
  previousComplete: null,
  sender: {
    name: "",
    tel: "",
  },
  accepter: {
    name: "",
    tel: "",
    addr: "",
    addrDetail: "",
  },
  products: [
    {
      id: 2387498,
      name: "가정용 한라봉10kg",
      origin_price: 30000,
      img: IMG_PRODUCT,
      isDiscount: false,
      sale_price: 30000,
      isEnable: true,
      amount: 0,
    },
    {
      id: 398742893,
      name: "가정용 한라봉10kg",
      origin_price: 30000,
      img: IMG_PRODUCT,
      isDiscount: true,
      sale_price: 28000,
      isEnable: true,
      amount: 0,
    },
  ],
};

export function resetGLOBAL_VAR() {
  GLOBAL_VAR.sender = {
    name: "",
    tel: "",
  };
  GLOBAL_VAR.accepter = {
    name: "",
    tel: "",
    addr: "",
    addrDetail: "",
  };
  GLOBAL_VAR.products.forEach((product) => (product.amount = 0));
}

export default GLOBAL_VAR;
