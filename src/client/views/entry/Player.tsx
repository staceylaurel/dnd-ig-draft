import * as React from "react";
import { setStorage } from "../../utils/api-services";
import { Link, useHistory } from "react-router-dom";
import apiServices from "../../utils/api-services";
import Button from 'react-bootstrap/Button';


const Player: React.FC<PlayerProps> = props => {
    const [userName, setUserName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const history = useHistory();
  
    const login = async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
  
      const token = await apiServices("/auth/login/", "POST", { userName, email, password });
      setStorage(token);
      history.push("/");
    };
  
    return (
      <div className="col-md-7 p-3 border bg-light">
        <h1>Player Login</h1>
        <div className="card bg-success text-info shadow">
        
        <label> Username: </label>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} type= "text"></input>
  
          <label> Email: </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type= "text"></input>
  
          <label> Password: </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type= "text">
            </input>

        </div>
        <button className="outline-secondary" onClick={login}>Login</button>
        <Link to={"/"}>Home </Link>
      </div>
    );
  };

interface PlayerProps{}

export default Player;




//go to Login into exisiting campaign <ul> exisiting logged in campaign
//go to Register new campaign  <button>