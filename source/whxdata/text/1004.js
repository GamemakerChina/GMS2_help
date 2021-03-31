rh._.exports({"0":["room"],"1":["room"],"2":["room"],"3":["\n  ","\n  ","\n  ","This variable holds the room index for the current room that your game is running. This is ","not"," a read only variable, however changing this will not change the index value for the current room, but rather change the room to match the index that\n    you have set the variable to. Care should be taken when doing this as if the index you change the variable to is not valid the game will throw an error and close. In general it is much better practice to use ","room_goto()","    to change rooms.","\n  "," ","\n  ","\n  ","room;","\n  "," ","\n  ","\n  ","Real (unique index value)","\n  "," ","\n  ","\n  ","if room_next(room) != -1","     {\n    ","     room_goto(room_next);\n    ","     }\n  ","\n  ","The above code will check to see if the next room exists and if so, it will go to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1004"})