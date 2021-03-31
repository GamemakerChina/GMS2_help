rh._.exports({"0":["display_set_sleep_margin"],"1":["display_set_sleep_margin"],"2":["display_set_sleep_margin"],"3":["\n  ","\n  ","\n  ","This function can be used to set the sleep margin value used for the render timing of your game, and requires a millisecond value. The default values are as follows:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Platform","\n        ","Milliseconds","\n      ","\n      ","\n        ","Windows","\n        ","10","\n      ","\n      ","\n        ","macOS","\n        ","10","\n      ","\n      ","\n        ","Ubuntu","\n        ","10","\n      ","\n      ","\n        ","HTML5","\n        ","10","\n      ","\n      ","\n        ","Android","\n        ","4","\n      ","\n      ","\n        ","iOS","\n        ","4","\n      ","\n      ","\n        ","Windows UWP","\n        ","10","\n      ","\n      ","\n        ","Xbox","\n        ","10","\n      ","\n      ","\n        ","PS4","\n        ","10","\n      ","\n      ","\n        ","Nintendo Switch","\n        ","10","\n      ","\n    ","\n  ","\n  "," ","\n  ","Note that even if the timing method is set to use vsync timing, the sleep margin will have some effect over the rendering of the game, and so you should take care when setting this value. For more information on display timing, please see ","display_set_timing_method()",".","\n  ","NOTE",": In addition to the Sleep Margin, you can further control your performance and power consumption on Windows by adjusting the ","thread scheduler's resolution"," at runtime.","\n  "," ","\n  ","\n  ","display_set_sleep_margin(milliseconds);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","milliseconds","\n        ","The number of milliseconds for the sleep margin","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if display_get_timing_method() != tm_sleep"," {\n    "," display_set_timing_method(tm_sleep);\n    "," if display_get_sleep_margin() != 20","     {\n    ","     display_set_sleep_margin(20);\n    ","     }\n    "," }\n  ","\n  ","The above code will check the timing method and then if it's not set to ","tm_sleep"," it will be set to that and the sleep margin set to 20.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","screen_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["display_set_sleep_margin"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1674"})