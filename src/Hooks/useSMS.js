import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const SMS_SENDER_ENDPOINT =
  "https://if98is43fj.execute-api.ap-northeast-2.amazonaws.com";

export default function useSMS() {
  const [isLoading, setIsLoading] = useState(false);

  const sendSMS = (smsContent) => {
    setIsLoading(true);
    axios
      .post(SMS_SENDER_ENDPOINT, { smsContent })
      .then((result) => console.log(result))
      .catch((error) => toast.error(error.toJSON().message))
      .finally(setIsLoading(false));
  };

  return { isLoading, sendSMS };
}
