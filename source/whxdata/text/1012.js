rh._.exports({"0":["room_restart"],"1":["room_restart"],"2":["room_restart"],"3":["\n  ","\n  ","\n  ","This function will restart the current room, as if it had just been entered. Note that the room will not restart until the end of the event where the function was called, so any code after this has been called will still run if in the same event. The\n    caveat to this is that any code which creates instances that is called after this, will ","not"," create the instance and so should be called before changing room. This function will also trigger the ","Room End"," event.","\n  "," ","\n  ","\n  ","room_restart();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if lives < 1 room_restart();","\n  ","The above code checks to see if the variable \"lives\" is less than 1 and if it is it will restart the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_restart"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1012"})