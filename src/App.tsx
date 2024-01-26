import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./router";
import "./App.scss";

function App() {
  const r = useRoutes(routes);

  return (
    <div className="w-full h-screen wrapper flex justify-center items-center">
      {r}
      <ToastContainer />
    </div>
  );
}

export default App;
