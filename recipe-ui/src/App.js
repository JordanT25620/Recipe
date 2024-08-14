// Ensures components.js is included
import { ButtonUsage, Floater, Email, Password } from "./components.js";
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";

function App() {
  return (
    <div className="App">
      <Signup />

    </div>
  );
}

export default App;