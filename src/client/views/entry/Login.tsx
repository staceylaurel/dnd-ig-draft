import * as React from "react";
import { setStorage } from "../../utils/api-services";
import { Link, useHistory } from "react-router-dom";
import apiServices from "../../utils/api-services";

const Login: React.FC<LoginProps> = props => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const history = useHistory();

  const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const token = await apiServices("/auth/login/", "POST", { email, password });
    setStorage(token);
    history.push("/");
  };

  return (
    <div className="col-md-7 p-3 border bg-light">
      <h1>Login</h1>
      <div className="card bg-success text-info shadow">
      
        <label> Email: </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type= "text"></input>

        <label> Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type= "text"></input>
      </div>
      <button onClick={login}>Login</button>
      <Link to={"/"}>Home </Link>
    </div>
  );
};

interface LoginProps {}

export default Login;