rh._.exports({"0":["gamepad_set_button_threshold"],"1":["gamepad_set_button_threshold"],"2":["gamepad_set_button_threshold"],"3":["\n  ","\n  ","\n  ","This function can be used to set the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1. The threshold defines at what point the button is considered\n    as being \"pressed\" for games that require them to act as a digital button. Note that this function will affect the ","check",", ","pressed"," and ","released","    states for analogue buttons, but will ","not"," affect the value returned by the function ","gamepad_button_check()",", which will always return the raw value for the button.","\n  "," ","\n  ","\n  ","gamepad_set_button_threshold(device, threshold);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n      ","\n        ","threshold","\n        ","The new threshold value (from 0 - 1, default 0.5).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if gamepad_get_button_threshold(0) != 0.5","    {\n    ","    gamepad_set_button_threshold(0, 0.5);","    }\n  ","\n  ","The above code checks the analogue button threshold of the gamepad connected to device \"slot\" 0 and if it is not the default value of 0.5, it is set to that value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_set_axis_deadzone ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_set_button_threshold"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1760"})