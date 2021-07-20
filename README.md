# PushNotification-Nodejs-Android<br>
This is push notification from node js to android.<br>
I) Create on folder for node js and server.js file.<br>
II) Open same folder on cmd and run following commands.(make sure that node is already install in your system.).<br>
  a)npm init -y<br>
  b)npm install firebase-admin<br>
III) Download json file from firebase project.<br>
  a) create one firebase project and go to project settings -> service accounts -> click on Generate new private key and add downloaded json file in node js folder.<br>
  b) add that file path in server.js file.<br>
IV) Run the following command to make sure that notification is send from node js to firebase. You will get following output:<br>
<img src="images/ss4.JPG"><br>
V) Create android project, give name to project (here PushNotificationClient) and connect that project to firebase.<br>
VI) To connect firebase, Open android studio -> Tools -> firebase -> search Cloud messaging -> click on connect to firebase and select your project in browser.<br>
VII) next step is to add cloud messaging dependancy to your project.<br>
<img src="images/ss1.jpeg" height=600 width=300>
<img src="images/ss2.jpeg" height=600 width=300>
<img src="images/ss3.jpeg" height=600 width=300>
