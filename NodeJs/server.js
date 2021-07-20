var admin = require("firebase-admin");

var serviceAccount = require("./pushnotification-6929c-firebase-adminsdk-gmxmw-284a4d6e53.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prismappfcm.firebaseio.com",
});

const sendNotification = (title, body, topic) => {
  var message = {
    notification: {
      title: title,
      body: body,
    },
    topic: topic,
  };

  // Send a message to devices subscribed to the provided topic.
  admin
    .messaging()
    .send(message)
    .then((response) => {
      // Response is a message ID string.
      console.log("Successfully sent message:", response);
    })
    .catch((error) => {
      console.log("Error sending message:", error);
    });
};

sendNotification("first Notification", "How are you?", "all");