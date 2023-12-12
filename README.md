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
  <img src="https://cdn.discordapp.com/attachments/1016883876070703176/1179874143743791186/image.png?ex=657b5e6c&is=6568e96c&hm=dc07a26fecf9002ef26415fc935747d8e70331c17f33b9010c6ff100e7d9e7b9&">
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

## 4 User Guide/Implementation

### 4.1 Client Side

#### 4.1.1 Starting the Application

All the user needs to do is go to the “**TimeKeeper**” website and start creating reminders.

### 4.2 Home

From this window user can create and view reminders while setting priorities and the reminder/notification date.
<p align="center">
  <img src=https://cdn.discordapp.com/attachments/1148690053690839064/1179649450197651527/image.png?ex=657a8d29&is=65681829&hm=5b4f0e177acf1dc1141470d6ecfc420e96ebf7bbb985f2ab84532293fe637538&>
</p>
<p align="center">
  Figure 5: Home Activity
</p>

#### 4.2.1 Calendar Details

The user has access to a calendar that when clicking on any day shows the reminders for that day and no others.
<p align="center">
  <img src=https://github.com/FelixPigeon1/TimeKeeper/assets/149452963/e35cc68e-03b0-4743-a0f7-fb1641fa3813
>
</p>
<p align="center">
  Figure 6: How TimeKeeper's Calendar Sort Looks
</p>

### 4.3 Server-Side

The server-side processing will be enabled using MongoDB. Whenever a user creates a reminder it will be stored in MongoDB to be accessed later.  
<p align="center">
  <img src=https://cdn.discordapp.com/attachments/1148690053690839064/1179866940374781952/Screenshot_2023-11-30_142740.png?ex=657b57b7&is=6568e2b7&hm=78f68af338379bf45b25484615e82a6bf2ab5b2ba9cb0038aef51a2fc6e80799&>
</p>
<p align="center">
  Figure 7: Server Storage
</p>

## 5 Looking Back

Even though we are a small three-person group we are proud of what we were able to create within these four months while managing work in other classes.  We didn't get to everything we wanted to such as notifications or login but if we had more time we are confident we would have been able to complete these as well. Though we didn't know how to do many of the things we had to code through the in-class demos and lectures and personal studying we were able to make this web app that we are proud of.

## 6 Future Scope

There is some future scope for this project. At this moment, the software does not send any notifications.  There is also no user login or authentication which would need to be added later. There is also no way for a user to check their reminders other than using a computer, which we would like to change so “**TimeKeeper**” can be accessed from any device and send reminders to the user.

## 7 Risk Analysis

The lack of notifications means that if a user forgets to check the website they may forget an important task such as taking medication.  Another risk is that the lack of login means that anyone can access your reminders if you stay logged in this means that they would have the ability to alter or even delete reminders users have made.  

## 8 Conclusion

All in all, we think “TimeKeeper” is a web app that will be able to help people in this busy world remember their tasks.  We hope that we can continue to make improvements to this project to fix the current lack of "TimeKeeper".

## 9 Walkthrough
[![Walkthrough Video](https://cdn.discordapp.com/attachments/1016883876070703176/1179881938387992606/image.png?ex=657b65af&is=6568f0af&hm=95b18e73f90bfcd7f89c9ea6699c02db85f250a1de652ebedf865db23f1d240c&)](https://youtube.com/shorts/KUM2p2Weicg?feature=shared)
