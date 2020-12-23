import * as React from "react";
import api from "../../utils/api-services";
import { Link, useHistory } from "react-router-dom";

const RegisterPlayer: React.FC<RegisterPlayerProps> = (props) => {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [campaign, setCampaign] = React.useState("");

  const history = useHistory();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await api("/auth/registerPlayer/", "POST", { username, email, password, campaign });
    history.push("/");
  };

  return (
    <div className="col-md-7 p-3 border bg-light">
      
      <label> Username/Character Name: </label>
        <input
          value={username}
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

        <label> Campaign Code: </label>
        <input
          value={campaign}
          onChange={(e) => setCampaign(e.target.value)}
          type="text"
        ></input>
     
      <button onClick={handleSubmit}>RegisterPlayer </button>
      <Link to={"/"}> Home </Link>
    </div>
  );
};

interface RegisterPlayerProps {}

export default RegisterPlayer;
