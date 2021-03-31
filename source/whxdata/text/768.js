rh._.exports({"0":["audio_listener_set_velocity"],"1":["audio_listener_set_velocity"],"2":["audio_listener_set_velocity"],"3":["\n  ","\n  ","\n  ","This function can be used to give the given listener ","Doppler ","effects and simulate audio motion based on the vector that is resolved from the given relative x, y and z positions. The default listener index is 0, but you can use the function\n    ","audio_get_listener_info()"," to get the different indices available for the target platform.","\n  ","If the given listener is not ever going to move, or the movement is not a constant motion, you would normally not need to set these values, but, for example, if you are making a scrolling game where the player has a constant bottom to top movement and\n    the enemies a constant top to bottom movement, you would set the listener ","and"," emitter velocities (for emitters you would use ","audio_emitter_velocity()",") to the appropriate vectors\n    to simulate the correct Doppler effect as they move past the player instance.","\n  ","The image below shows how this could be setup for the example game given above:","\n  ","\n  ","\n  ","audio_listener_set_velocity(index, x, y, z);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The listener to get the data for (default 0).","\n      ","\n      ","\n        ","x","\n        ","The x velocity of the listener (default 0).","\n      ","\n      ","\n        ","y","\n        ","The y velocity of the listener (default 0).","\n      ","\n      ","\n        ","z","\n        ","The z velocity of the listener (default 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var num = audio_get_listener_count();"," for(var i = 0; i < num; ++i;)","    {\n    ","    var info = audio_get_listener_info(i);","    var data = audio_listener_get_data(info[? \"index\"]);","    if data[? \"vx\"] != 0","       {\n    ","       audio_listener_set_velocity(info[? \"index\"], 0, 0, 0);","       }\n    ","    ds_map_destroy(info);\n    ","    ds_map_destroy(data);\n    ","    }\n  ","\n  ","The above code checks the number of listeners available then loops through them and if their x velocity is not 0, it sets their velocity values to 0, 0, 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_listener_set_orientation","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_listener_set_velocity"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"768"})