import "./app.css";
import Formulario from "./components/Formulario";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <> <h1> Login Form</h1> 
    <Formulario />
    </>
  );
}
export default App;