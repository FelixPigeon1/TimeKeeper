# TimeKeeper

## 1. Abstraction

People today are constantly busy and on the move and sometimes, it can be difficult to remember everything that needs to be done. Our web application, "**TimeKeeper**", is designed to help keep you organized throughout your day. Through the user-friendly interface, you can create reminders, prioritize them, and get reminded at any time you set.  "**TimeKeeper**" is designed to help users manage their time more effectively, reducing the likelihood of forgetting important tasks and ensuring that all tasks are completed on time.


## Developed By

**Felix Miner** \
**Justin Ott** \
**Evan Maurer**

## 2. Introduction

Javascript is a popular programming language for web development that through the use of React allows us to create a user-friendly interface.  With the busy pace of modern life making sure you are staying productive is important, with almost everyone having access to the web, we have made a quick and easy way to get thoughts of important events out of your head, and saved into your device. These reminders can be as simple or important as you want them to be, from a reminder to preheat the oven to an important interview. With  "**TimeKeeper**", you will be able to do just that. Quick and easy reminders and the touch of a button, with flexible options for the reminders.


## 3. Architecture

"**TimeKeeper**" web application is based on the client-server architecture.  The client is provided with an interactive web app user interface for the process of creating reminders and getting reminded.  The server-side processing will be enabled using Mern.  The client requests the user's previous reminders and the server responds with all the reminders the user had input the last time they used "**TimeKeeper**."
<p align="center">
  <img src="https://github.com/FelixPigeon1/TimeKeeper/assets/149452963/927280c2-2f59-47f4-a6a0-573f4c3d5632">
</p>
<p align="center">
  Figure 1: Client Server Architecture of TimeKeeper Web App
</p>

### 3.1 UML

This section contains 3 UML diagrams for how the "**TimeKeeper**" web app will work.

#### 3.1.1 Use Case Diagram
<p align="center">
  <img src=Assets/Images/TimeKeeper_Use_Case.png>
</p>
<p align="center">
  Figure 2: Use Case Diagram for TimeKeeper
</p>

#### 3.1.2 Sequence Diagram

Figure 3 shows the sequence diagram for the add reminder.  Initially, the user interface is loaded and the app will check if it is connected to the server.  If it is connected the app will connect to the database, create the reminder, and add it to the list of reminders.  If the app isn't connected to the server an unconnected error is displayed to the user.

<p align="center">
  <img src=Assets/Images/TimeKeeper_Sequence_Diagrams.png>
</p>
<p align="center">
  Figure 3: Sequence Diagram for Add Reminder
</p>

#### 3.1.3 Class Diagram

Figure 4 shows the two classes that are needed for "**TimeKeeper**" to work

<p align="center">
  <img src=Assets/Images/Class_Diagram.png>
</p>
<p align="center">
  Figure 4: Class Diagram for TimeKeeper
</p>

## 4 User Guide/Implementation

### 4.1 Client Side

#### 4.1.1 Starting the Application

All the user needs to do is go to the “**TimeKeeper**” website and start creating reminders.

### 4.2 Home

<p align="center">
  <img src=>
</p>
<p align="center">
  Figure 5: Home Activity
</p>

From this window user can create and view reminders while setting priorities and the reminder/notification date.

#### 4.2.1 Notification Details

<p align="center">
  <img src=>
</p>
<p align="center">
  Figure 6: How TimeKeeper Reminders Will Appear
</p>

The server sends notifications to the user at the set time specified in each reminder.

### 4.3 Server-Side

<p align="center">
  <img src=>
</p>
<p align="center">
  Figure 7: Server Storage
</p>
The server-side processing will be enabled using MongoDB. Whenever a user creates a reminder it will be stored in MongoDB to be accessed later.  

## 5 Future Scope

There is some future scope for this project. At this moment, the software does not send any notifications other than an on-screen pop-up.  There is also no user login or authentication so anyone can access your reminders.  There is also no way for a user to check their reminders other than using a computer, which we would like to change so “**TimeKeeper**” can be accessed from any device.

## 6 Conclusion

All in all, we think “TimeKeeper” is a web app that will be able to help people in this busy world remember their tasks.  We hope that we can continue to make improvements to this project.

## 7 Walkthrough
![Walkthrough Video](Put Video Here)
