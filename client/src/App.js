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
              <table className='reminder-box'>
                <tr className='reminder-box-title'>
                  {reminder.name}
                </tr>
                <tr>
                  {reminder.eventTime}
                </tr>
                <tr>
                  {reminder.remindTime}
                </tr>
                
              </table>
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
          <select className='prio-select'
              onChange={(event) => {
                setPriority(event.target.value);
              }}
            >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
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
          <button className='reminder-button' onClick={createReminder}> Add Reminder </button>
      </div>
    </div>

  );
}

export default App;
