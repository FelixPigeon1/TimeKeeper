# TimeKeeper

## 1. Abstraction

 People today are constantly busy and on the move and sometimes, It can be diffuclt to remember everything that needs to be done. Our app, TimeKeeper, is designed to help keep you organized throughout your day. With the app you can set reminders and choose when it should remind you about your various tasks.

## Developed By

**Felix Miner** \
**Justin Ott**, \
**Evan Maurer**

## 2. Introduction

Making sure you are staying productive is important, With almost everyone having a smart phone, we have made aquick and easy way to get thoughts of important events out of head, and saved into your device. These reminders can be as simple or important as you want them to be, from a reminder to preheat the oven to an important interview. With TimeKeeper, you will be able to do just that. Quick and easy reminders and the touch of a button, with flexible options for the reminders

## 3. Architecture

### 3.1 UML

#### 3.1.1 Use Case Diagram

![image](Assets/Images/TimeKeeper_Use_Case.png)

#### 3.1.2 Sequence Diagram

Figure 2 shows the sequence diagram for the add reminder usecase.  Initially the user interface is loaded and the app will check if it is connected to the server.  If it is connected the app will connect to the database and create the reminder and add it to the list of reminders.  If the app isn't connected to the server a unconnected error is displayed to the user.

![image](Assets/Images/TimeKeeper_Sequence_Diagrams.png)

#### 3.1.3 Class Diagram

![image](Assets/Images/Class_Diagram.png)
