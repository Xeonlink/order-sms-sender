export function setTelHyphen(string) {
  if (!string || typeof string !== "string") return "";

  return string
    .toString()
    .replace(/[^0-9]/g, "")
    .replace(
      /(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,
      "$1-$2-$3"
    )
    .replace("--", "-");
}

export function YYYY_MM_DD(date) {
  let x = new Date(date);
  let YYYY = x.getFullYear().toString();
  let MM = (x.getMonth() + 1).toString();
  let DD = x.getDate().toString();
  DD.length === 1 && (DD = "0" + DD);
  MM.length === 1 && (MM = "0" + MM);
  return `${YYYY}-${MM}-${DD}`;
}

export function makeRoadAddrMoreShort(roadAddress) {
  return roadAddress
    .replace("제주특별자치도", "제주도")
    .replace("세종특별자치시", "세종시");
}

export function toKRW(target) {
  return setNumComma(target) + "원";
}

export function toNum(target) {
  return target.toString().replace(/[^0-9]/g, "") * 1;
}

export function toNumString(target) {
  return target.toString().replace(/[^0-9]/g, "");
}

export function isEnter(e) {
  return e.code === "Enter" || e === "Enter";
}

export function setNumComma(target) {
  return toNum(target).toLocaleString();
}

export function orderedProductToString(product) {
  return product.map((i) => `${i.name} (${i.amount})`).join(", ");
}
