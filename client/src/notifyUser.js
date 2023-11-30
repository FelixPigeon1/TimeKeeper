import React, { Component } from 'react';

class NotifyUser extends Component {
    constructor() {
        super();
        this.showNotification = this.showNotification.bind(this);
    }


    componentDidMount() {
        if (!("Notification" in window)) {
        console.log("This browser does not support desktop notification");
        } else {
        Notification.requestPermission()
        }
    }
    
    showNotification(notiftext) {
        new Notification(notiftext);
        console.log("notif sent");
    }

    render() {
        return (
          <div>
            <button onClick={this.showNotification}>Show notification</button></div>
        );
      }
}

export default NotifyUser;