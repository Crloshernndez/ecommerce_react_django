import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div> app </div>
    </Provider>
  );
}

export default App;
