rh._.exports({"0":["audio_listener_set_orientation"],"1":["audio_listener_set_orientation"],"2":["audio_listener_set_orientation"],"3":["\n  ","\n  ","\n  ","With this function you can change the orientation of the given ","listener"," within the 3D audio space. The default listener index is 0, but you can use the function ","audio_get_listener_info()"," to\n    get the different indices available for the target platform.","\n  ","The ","look at"," vector and ","up"," vector are based on the values that are resolved from the given relative x, y and z positions, and default to (0, 0, -1) for the look at vector and (0, 1, 0)\n    for the up vector, as shown in the illustration below:","\n  ","\n  ","Changing the given listener orientation with this function will change how sound created by audio emitters around the game room are perceived by the player of your game. In the example below, sounds created by the emitter when the listener is at the\n    default position would appear to be coming from below and to the right of the listener, but with the new position and orientation of the listener they will now be perceived as coming from ","above"," and to the right.","\n  ","\n  "," ","\n  ","\n  ","audio_listener_set_orientation(index, lookat_x, lookat_y, lookat_z, up_x, up_y, up_z);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The listener to set the orientation of.","\n      ","\n      ","\n        ","lookat_x","\n        ","The x look vector (default 0).","\n      ","\n      ","\n        ","lookat_y","\n        ","The y look vector (default 0).","\n      ","\n      ","\n        ","lookat_z","\n        ","The z look vector (default -1).","\n      ","\n      ","\n        ","up_x","\n        ","The x up vector (default 0).","\n      ","\n      ","\n        ","up_y","\n        ","The y up vector (default 1).","\n      ","\n      ","\n        ","up_z","\n        ","The z up vector (default 0).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _m = camera_get_view_mat(view_camera[0]);"," audio_listener_set_position(global.Player_Listener, _m[0], _m[1], _m[2]);"," audio_listener_set_orientation(info[? \"index\"], _m[3], _m[4], _m[5], _m[6], _m[7], _m[8]);","\n  ","The above code retrieves the view matrix for camera view [0] and then uses it to set the audio listener position and orientation for the listener with the ID stored in the global variable \"Player_Listener\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Listeners","\n        ","Next: ","audio_get_listener_count","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_listener_set_orientation"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"769"})