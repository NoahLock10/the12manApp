// import android.app.NotificationManager;
// import android.support.v4.app.NotificationCompat;

var notificationsEnabled = false;
document.getElementById("notifyBtn").onload = function() {initNotifications()};
            
navigator.serviceWorker.register('sw.js');

function initNotifications() {
    if (window.Notification) {
        Notification.requestPermission(function(permission) {
            if (permission === 'granted') {
                notificationsEnabled = true;
                console.log("Granted");
            } else {
                alert("You denied Notifications");
            }
        });
    } else {
        alert("Your browser doesn't support Notifications API");
    }
}

function showNotification() {
    navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample'
        });
    });
}

/*
function showNotification() {
    if (notificationsEnabled) {
        console.log("Button pushed");
        var n = new Notification("Noah", {
            body : 'You clicked on the button !',
            icon : 'thumb.png'
        });
        n.onclick = () => {
            window.open('https://google.com')
        }
    } else {
        alert("Notifications are disabled");
    }
}*/
