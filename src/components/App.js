import Login from "./Login.js";
import useLocalStorage from "./hooks/useLocalStorage.js";
import Dashboard from "./Dashboard.js";
import { ContactsProvider } from "../contexts/ContactsProvider.js";
function App() {
  const [id, setId] = useLocalStorage("id");

  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
