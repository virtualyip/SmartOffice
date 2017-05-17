'use strict';

function UserNotification() {

}

UserNotification.prototype.show = function(message) {
  // Are Notifications supported in the service worker?
  if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
    console.log('Notifications aren\'t supported.');
    return;
  }

  // Check the current Notification permission.
  // If its denied, it's a permanent block until the
  // user changes the permission
  if (Notification.permission === 'denied' || Notification.permission === 'default') {
    console.log('The user has blocked notifications.');
    Notification.requestPermission(function (permission) {
      this.show(message);
      return;
    });
  };

  // If the user accepts, let's create a notification
  if (Notification.permission === "granted") {
    var notification = new Notification(message);
  }
}

window.addEventListener('load', function() {
  window.Apps = window.Apps || {};
  window.Apps.UserNotification = window.Apps.UserNotification || new UserNotification();
});