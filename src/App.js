import "App.css";
import useGlobalState from "Hooks/useGlobalState";
import Home from "page/Home";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
