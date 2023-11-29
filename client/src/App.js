import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
//https://www.npmjs.com/package/react-datepicker

function App() {
  const [listOfReminders, setListOfReminders] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(0);
  const [eventTime, setEventTime] = useState(new Date())
  const [remindTime, setRemindTime] = useState(new Date())

  useEffect(() => {
    Axios.get("http://localhost:3001/getReminders").then((response) => {
      setListOfReminders(response.data);
    });
  }, []);

  const createReminder = () => {
    Axios.post("http://localhost:3001/createReminder", {
      name,
      priority,
      eventTime,
      remindTime
    }).then((response) => {
      setListOfReminders([
        listOfReminders, 
        {
          name,
          priority,
          eventTime,
          remindTime
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="reminderDisplay">
        {listOfReminders.map((reminder) => {
          return (
            <div>
              <svg width="238" height="102" viewBox="0 0 238 102" xmlns="http://www.w3.org/2000/svg">
              <rect y="9.90295" width="238" height="92.0971" rx="10" fill="#36CB33"/>
              <path d="M0 9.99999C0 4.47714 4.47715 0 10 0
                       H228C233.523 0 238 4.47715 238 10
                       V82.0971C238 87.62 233.523 92.0971 228 92.0971
                       H10
                       C4.47715 92.0971 0 87.6199 0 82.0971
                      V9.99999Z" fill="#EAB662"/>
                <text x="5" y="30" class="title">{reminder.name}</text>
              </svg>
              <h1>{reminder.name}</h1>
              <p>Priority: {reminder.priority}</p>
              <p>Event Time: {reminder.eventTime}</p>
              <p>Remind Time: {reminder.remindTime}</p>
            </div>
          );
        })}
      </div>

      <div className="createReminderWindow">
        <div>
          <input
              type="text"
              placeholder='Reminder Title...'
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
        </div>
        <div>
          <input
              type="number"
              placeholder='Priority...'
              onChange={(event) => {
                setPriority(event.target.value);
              }}
            />
        </div>
        <div>
          <DatePicker
              selected={eventTime}
              onChange={(date) => {
                setEventTime(date);
              }}
              showTimeSelect
              dateFormat={"Pp"}
            />
        </div>
        <div>
          <p>Date to remind</p>
          <DatePicker
              selected={remindTime}
              onChange={(date) => {
                setRemindTime(date);
              }}
              showTimeSelect
              dateFormat={"Pp"}
            />
        </div>
          <button onClick={createReminder}> Add Reminder </button>
      </div>
    </div>

  );
}

export default App;
