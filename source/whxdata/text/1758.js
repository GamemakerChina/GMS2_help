rh._.exports({"0":["gamepad_get_button_threshold"],"1":["gamepad_get_button_threshold"],"2":["gamepad_get_button_threshold"],"3":["\n\n\n\n  ","\n  ","\n  ","This function can be used to detect the current threshold setting of the analogue buttons for a given device. The default threshold for all analogue buttons is 0.5, with the range being from 0 to 1. The threshold defines at what point the button is\n    considered as being \"pressed\" for games that require them to act as a digital button.","\n  "," ","\n  ","\n  ","gamepad_get_button_threshold(device);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","Which gamepad device \"slot\" to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if gamepad_get_button_threshold(0) != 0.5","    {\n    ","    gamepad_set_button_threshold(0, 0.5);","    }\n  ","\n  ","The above code checks the analogue button threshold of the gamepad connected to device \"slot\" 0 and if it is not the default value of 0.5, it is set to that value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: "," gamepad_get_axis_deadzone ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_get_button_threshold"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1758"})