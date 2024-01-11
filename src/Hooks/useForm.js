import { useState } from "react";

export default function useForm(defaultValues, submitCallback) {
  const [data, setData] = useState(defaultValues || {});

  const handleChange = (arg1, arg2) => {
    if (typeof arg1 === "object" && arg2 === undefined) {
      // key : [arg1.target.name] // value : arg1.target.value
      return setData({ ...data, [arg1.target.name]: arg1.target.value });
    }

    if (typeof arg1 === "object" && typeof arg2 === "function") {
      // key : [arg1.target.name] // value : arg2(arg1.target.value)
      return setData({ ...data, [arg1.target.name]: arg2(arg1.target.value) });
    }

    if (arg1 === "set" && arg2 !== undefined) {
      return setData({ ...data, ...arg2 });
    }

    if (typeof arg1 === "string" && arg2 !== undefined) {
      // key : arg1 // value : arg2
      return setData({ ...data, [arg1]: arg2 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitCallback && typeof submitCallback === "function") {
      submitCallback(data);
    }
  };

  return { data, handleChange, handleSubmit };
}
