rh._.exports({"0":["device_mouse_dbclick_enable"],"1":["device_mouse_dbclick_enable"],"2":["device_mouse_dbclick_enable"],"3":["\n  ","\n  ","\n  ","This function can be used to set the device to detect a double tap of the ","mb_left"," (left mouse button) as an ","mb_right"," (right mouse button) tap or not. By default this is set to ","true",", meaning that every time the user taps the\n    device screen twice quickly and consecutively, the return value is the same as if the right mouse button had been clicked. When this is on, the first tap will be detected as ","mb_left",", and the second as ","mb_right",", so make sure that\n    any code you use takes this into account.","\n  "," ","\n  ","\n  ","device_mouse_dbclick_enable(bool);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","bool","\n        ","Set double-click detection on (","true",") or off (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if os_type == os_windows || os_type == os_mac","    {\n    ","    device_mouse_dbclick_enable(false);\n    ","    }\n  ","\n  ","The above code checks to see if the device running the game is a Windows PC or a Mac and if it is either of them, it disables the double tap function.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_mouse_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["device_mouse_dbclick_enable"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1716"})