rh._.exports({"0":["gamepad_set_vibration"],"1":["gamepad_set_vibration"],"2":["gamepad_set_vibration"],"3":["\n\n\n\n  ","\n  ","\n  ","With this function you can set the vibration of the gamepad motors, with either motor using a value from 0 (no vibration) to 1 (full vibration). Note that there is no time limit on this function, so you will need to use a variable or an alarm to switch\n    off the vibration (set motors to 0) after a given time has passed otherwise the gamepad will continue to vibrate indefinitely.","\n  ","NOTE",": This function is currently only available for the standard ","Windows",", ","PS4"," and ","Xbox One"," target modules.","\n  "," ","\n  ","\n  ","gamepad_set_vibration(device, left_motor, right_motor);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","left_motor","\n        ","The amount of vibration from the left motor from 0 to 1.","\n      ","\n      ","\n        ","right_motor","\n        ","The amount of vibration from the right motor from 0 to 1.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if lives = 0","    {\n    ","    gamepad_set_vibration(0, 1, 1);","    alarm[0] = room_speed / 2;","    }\n  ","\n  ","The above code would be used (for example) in a collision event to make the gamepad plugged into \"slot\" 0 vibrate for half a second, with the alarm that is set being used to switch it off again once that time has passed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_set_colour ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_set_vibration"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1762"})