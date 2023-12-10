import './App.css';
import { useState, useEffect } from 'react';
import Axios from "axios";
import DatePicker from "react-datepicker";
import Calendar from  'react-calendar';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [listOfReminders, setListOfReminders] = useState([]);
  const [listOfTodayReminders, setListOfTodayReminders] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(0);
  const [eventTime, setEventTime] = useState(new Date());
  const [remindTime, setRemindTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");

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

  const onClickDay = (currentDate) => {
    //set i to zero and clear the current list of reminders for the day, also define the date vars
    let i = 0;
    let new_list = [];
    let currentYear = currentDate.getFullYear()
    //we add 1 because the function returns the months as 0-11 instead of 1-12, this is to fix formating so we can compare with the Date() object format.
    let currentMonth = (currentDate.getMonth() + 1)
    let CurrentDay = currentDate.getDate()

    //for each reminder in the database
    while (i < listOfReminders.length) {
      //if the month is a single digit, we must change the format of the currentDate accordingly
      if (currentMonth < 10) {
        if (String((listOfReminders[i].eventTime).slice(0,10)) === String(currentYear + "-0" + currentMonth + "-" + CurrentDay)) {
          new_list.push(listOfReminders[i]);
        }
      }
      else if (String((listOfReminders[i].eventTime).slice(0,10)) === String(currentYear) + "-" + currentMonth + "-" + CurrentDay) {
        new_list.push(listOfReminders[i]);
      }
      i++;
    };
    setListOfTodayReminders(
      new_list
    );
  };

  return (
    <div className="App">
      <div className='calendarDisplay'>
      <Calendar
        value={currentDate}
        onChange={setCurrentDate}
        onClickDay={onClickDay}
        selectRange={false}
        returnValue={"start"}
        locale={"en-US"}/>
      </div>

      <div className="reminderDisplay">
        <h1>Reminders</h1>
        {listOfTodayReminders.map((reminder) => {
          return (
            <div>
              <table className='reminder-box'>
                <thead className='reminder-box-title'>
                  {reminder.name}
                </thead>
                <tbody>
                  Time of event: {(reminder.eventTime).slice(11,16)}
                </tbody>
                <tfoot>
                  Time to remind: {(reminder.remindTime).slice(11,16)}
                </tfoot>
              </table>
              <p></p>
            </div>
          );
        })}
      </div>

      <div className="createReminderDisplay">
        <div>
          <input
              type="text"
              placeholder='Reminder Title...'
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <p></p>
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
