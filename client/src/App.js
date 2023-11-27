import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";

function App() {
  const [listOfReminders, setListOfReminders] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(0);
  const [eventTime, setEventTime] = useState(Date)
  const [remindTime, setRemindTime] = useState[Date]
  useEffect(() => {
    Axios.get("http://localhost:3001/getReminders").then((response) => {
      setListOfReminders(response.data);
    })
  })

  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
