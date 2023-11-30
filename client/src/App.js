import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import NotifyUser from './notifyUser';

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

  function checkReminderTime() {
    listOfReminders.map().forEach(function(value, key) {
      if (value == "remindTime") {
        if (key.parse() == Date.now()) {
          NotifyUser.showNotification()
        }
      }
    });
  };

  setInterval(checkReminderTime)

  return (
    <div className="App">
      <div className="reminderDisplay">
        {listOfReminders.map((reminder) => {
          return (
            <div>
              <table className='reminder-box'>
                <thead className='reminder-box-title'>
                  {reminder.name}
                </thead>
                <tbody>
                  <tr>
                    Priority: {reminder.priority}
                  </tr>
                  <tr>
                    Time of event: {reminder.eventTime.slice(0, 16)}
                  </tr>
                  <tr>
                    Time to notify: {reminder.remindTime.slice(0, 16)}          
                  </tr>
                </tbody>
              </table>
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
          <p className='light-font'>Priority:</p>
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
        <p className='light-font'>Date of event:</p>
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
          <p className='light-font'>Date to remind:</p>
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
