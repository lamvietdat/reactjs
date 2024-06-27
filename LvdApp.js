import './App.css';
import LvdListUsers from './components/LvdListUsers';
import axios from './api/LvdApi';
import { useEffect } from 'react';
function LvdApp() {

  const [LvdListUsers,setlvdListUsers] = useState([]);

  const lvdGetAllUsers = async()=>{
    const lvdResponse = await axios.get("lvdUsers");
    console.log("Api Data:",lvdResponse.data);
    setlvdListUsers(lvdResponse.data)
  }

  useEffect(()=>{
    lvdGetAllUsers();
    console.log("State Data:",LvdListUsers);
  },[])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <LvdListUsers renderLvdListUsers={LvdListUsers}/>
    </div>
  );
}

export default LvdApp;
