import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  const [alertVisible,setAlertVisible]=useState(false);
  return (
    <div>
      {alertVisible&&<Alert onClose={()=>setAlertVisible(false)}>Enter all Details</Alert>}
      <Button color="success"onClick={()=>setAlertVisible(true)}>Login</Button>
    </div>
  );
}
export default App;
