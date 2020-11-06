import * as React from "react";
import api from "../../utils/api-services";
import { Link, useHistory } from "react-router-dom";

const Register: React.FC<RegisterProps> = (props) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api("/auth/register/", "POST", { username, email, password, role });
    history.push("/");
  };

  return (
    <div className="col-md-7 p-3 border bg-light">
      
      <label> Username/Character Name: </label>
        <input
          value={name}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        ></input>

        <label> Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        ></input>

        <label> Password: </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
        ></input>

        <label> Role </label>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          type="text"
        ></input>
     
      <button onClick={handleSubmit}>Register </button>
      <Link to={"/"}> Home </Link>
    </div>
  );
};

interface RegisterProps {}

export default Register;
