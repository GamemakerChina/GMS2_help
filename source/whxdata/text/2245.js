rh._.exports({"0":["Push Notifications"],"2":["Push Notifications,local notifications,remote notifications"],"3":["\n  ","\n  ","\n  ","On mobile devices, normally only one application can be active in the foreground at any time, but many games and applications operate in a time-based or interconnected environment where events of interest to users can occur when the application is ","not","    in the foreground. In these cases, ","Local"," and ","Remote"," push notifications can allow these games to notify their users when events occur.","\n  ","When the operating system delivers a local or remote push notification and the target application is not running in the foreground, it presents the notification to the user in the form of a banner. If there is a notification alert and the user taps\n    on it, then the game is launched and an ","Asynchronous Push Event"," is called where you can check the callback string that you specify and resolve the push\n    based on its value. If the application is running in the foreground when the notification is delivered, the application will still receive an Asynchronous Push Event, but the user will get no message displayed unless you create it yourself.","\n  ","There are a few differences to note between supported platforms:","\n  ","\n    ","On Android, ","all"," notifications received when the app is not running/in background, will be stored, and the data delivered by the async event the next time the app runs and you will need to enable push notifications within the ","Android Game Options","      for them to work.","\n    ","On iOS, data for a particular notification will only be delivered when the notification is selected (or if the app is running in foreground when the notification is received) and you will need to enable push notifications within the ","iOS Game Options","      for them to work.","\n  ","\n  "," ","\n  ","\n  ","A local push notification is local to the device that the game is installed on, and requires no back-end server. You simply set the date and time for the notification and it will be displayed to the user if the game is not currently running. This type\n    of notification is useful to set \"reminders\" for the user to play your game again, or to offer a daily reward for playing, etc... and when the user taps the notification it will launch the game and pass in a data string which can then be\n    parsed by the game to give a reward or whatever.","\n  ","NOTE",": This functionality is limited to the ","iOS"," and ","Android"," target modules. For ","Android"," you will need to have installed the ","Google Push Notification","    extension.","\n  ","The following functions are available for local notifications:","\n  "," ","\n  ","\n    ","push_local_notification","\n    ","push_get_first_local_notification","\n    ","push_get_next_local_notification","\n    ","push_cancel_local_notification","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","Remote notification messages are sent by a server to a service provided by the device platform app store, and this then forwards those messages onto all the devices on which your application is installed. This is supported by GameMaker Studio 2 on the\n    iOS and Android target modules.","\n  ","There are no functions in GameMaker Studio 2 to deal with remote notifications, as they must all be generated by your server and handled by the respective app stores. However, once set up correctly, GameMaker Studio 2 games will receive these notifications,\n    which can then be dealt with in the ","Asynchronous Push Event",", as you would a local notification.","\n  ","Please note that there is no guarantee that remote push notifications will be delivered, and that the allowed data payload is fairly small. This varies between platforms, but iOS is particularly limited - the apple service only delivers the most recent\n    notification, which must be selected by the recipient for the payload data to be delivered to your async event, and these notifications have a maximum payload size of 256bytes. Typically a remote push notification would just indicate that new data\n    is available from your server for example.","\n  ","NOTE",": Implementing the server-side is entirely up to the end user, and YoYo Games do not provide any support for that side of things, other than basic set-up information available from their Knowledge Base.","\n  ","For further details on how to go about setting up a server, as well as information specific to the available platforms, please see the following articles:","\n  "," ","\n  ","\n    ","Android: Remote Notifications Using Firebase","\n    ","iOS: Remote Push Notifications","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asynchronous Functions","\n        ","Next: ","Facebook","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Push Notifications"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"6":["Local Notifications","Remote Notifications"],"id":"2245"})