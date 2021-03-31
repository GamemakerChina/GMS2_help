rh._.exports({"0":["steam_is_screenshot_requested"],"1":["steam_is_screenshot_requested"],"2":["steam_is_screenshot_requested"],"3":["\n  ","\n  ","\n  ","This function will poll the Steam API to see if the key for taking a screenshot of the game has been pressed. The function will only return ","true"," for one step (game tick) if the key has been pressed, and will return ","false"," at all other\n    times.","\n  ","NOTE",": this does ","not"," take a screenshot for you. This only signals that the key has been pressed and you must use the GameMaker Studio 2 functions ","screen_save()","    or ","screen_save_part()"," to save a local copy of the file to be uploaded.","\n  "," ","\n  ","\n  ","steam_is_screenshot_requested();","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if steam_is_screenshot_requested()","     {\n    ","     var file = \"Catch_The_Haggis_\" + string(global.scrn_num) + \".png\");","     screen_save(file)\n    ","     steam_send_screenshot(file, window_get_width(), window_get_height());","     global.scrn_num += 1;","     }\n  ","\n  ","The above code will poll the Steam API for a screenshot request and if it has been, a unique name for the image file will be generated, a screenshot will be taken, and the file will be sent to the Steam Community page for the user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_send_screenshot","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_is_screenshot_requested"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2359"})