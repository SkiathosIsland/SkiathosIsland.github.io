import { useState } from "react";
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";

const FormContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>{isLogin ? <Login setIsLogin={setIsLogin} /> : <Register />}</div>
  );
};

export default FormContainer;
