import React from "react";
import "App.css";
import Home from "page/Home";
import useGlobalState from "Hooks/useGlobalState";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [pages] = useGlobalState("pages", [<Home key={0} />]);

  return (
    <div className="App">
      {pages}

      <ToastContainer
        theme="dark"
        transition={Zoom}
        position="top-center"
        autoClose={2000}
        // hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // closeButton={false}
      />
    </div>
  );
}
