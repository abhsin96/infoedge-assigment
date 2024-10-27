import { useRoutes } from "react-router-dom";
import { routers } from "./route";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { store } from "./store";

function App() {
  const content = useRoutes(routers);
  return (
    <>
      <Provider store={store} >{content}</Provider>
      <ToastContainer />
    </>
  );
}

export default App;
