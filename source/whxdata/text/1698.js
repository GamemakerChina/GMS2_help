rh._.exports({"0":["keyboard_lastkey"],"1":["keyboard_lastkey"],"2":["keyboard_lastkey"],"3":["\n  ","\n  ","\n  ","This variable refers to the value that ","keyboard_key"," was in the previous frame, returning the keycode of that key (all standard keycode constants are returned). This variable is ","not"," read only and you can\n    change it, for example to set it to -1 if you handled it already.","\n  "," ","\n  ","\n  ","keyboard_lastkey;","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if (keyboard_lastkey != -1)","    {\n    ","    str += keyboard_lastchar;","    keyboard_lastkey = -1;","    }\n  ","\n  ","The above code checks to see if the lastkey variable is not equal to -1, and if it is it adds whatever the last key was as a string to the variable \"str\", then it resets the ","keyboard_lastkey"," variable to accept further input.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_lastchar","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_lastkey"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1698"})