rh._.exports({"0":["analytics_event_ext"],"1":["analytics_event_ext"],"2":["analytics_event_ext"],"3":["\n  ","\n  ","\n  ","This function will send the specified text to the analytics provider that you have set up through the ","HTML5 Game Options",". This function can be used to create a custom analytic to track something\n    outside of the scope of the provider being used, and will also accept custom parameter/value pairs, where the parameter is a string and the value a real number. For Google Analytics, you can only add in one extra pair while Flurry will accept up to\n    7.","\n  "," ","\n  ","\n  ","analytics_event_ext(string, string_param, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","A string to send to the provider.","\n      ","\n      ","\n        ","string_param[0 -9]","\n        ","The parameter to send (a string).","\n      ","\n      ","\n        ","value[0 - 9]","\n        ","The value of the parameter (a real number).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var num, time;"," ini_open(\"Options.ini\");\n    "," num = ini_read_real(\"Data\", \"Plays\", 0);"," num += 1;"," time = current_time;"," analytics_event_ext(GAME_NAME, \"Plays\", num, \"Time\", time);"," ini_write_real(\"Data\", \"Plays\",\n    num);"," ini_close();\n  ","\n  ","The above code will get play information from an ini file as well as the current time and then send those details to the analytics provider.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Web And HTML5","\n        ","Next: ","url_open","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["analytics_event_ext"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2303"})