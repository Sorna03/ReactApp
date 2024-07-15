import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  let items = ["Java", "Python", "C", "C++"];
  const handleSelectItem=(item:string)=>{
    console.log(item)
  }
  const [alertVisible,setAlertVisible]=useState(false);
  return (
    <div>
      <ListGroup items={items} heading="Select a Course" onSelectItem={handleSelectItem}/>
      {alertVisible&&<Alert onClose={()=>setAlertVisible(false)}>Enter all Details</Alert>}
      <Button color="success"onClick={()=>setAlertVisible(true)}>Register</Button>
    </div>
  );
}
export default App;
