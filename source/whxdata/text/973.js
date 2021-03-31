rh._.exports({"0":["instance_activate_object"],"1":["instance_activate_object"],"2":["instance_activate_object"],"3":["\n  ","\n  ","\n  ","With this function you can activate a single instance or all instances of a specific object from all those that have been deactivated previously. Note that if you have deactivated an instance or object that has been flagged as ","Persistent",", then\n    you will need to reactivate it again with this function before changing room, otherwise it will ","not"," be carried over and will be discarded instead. Note too that activation is not instantaneous, and an instance that has been activated in this\n    way will not be considered to be active until the end of the event in which the function was called.","\n  "," ","\n  ","\n  ","instance_activate_object(obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The object or instance to activate (the keyword ","all"," can also be used).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","instance_activate_all();"," var _vx = camera_get_view_x(view_camera[0]);"," var _vy = camera_get_view_y(view_camera[0]);"," var _vw = camera_get_view_width(view_camera[0]);"," var _vh = camera_get_view_height(view_camera[0]);"," instance_deactivate_region(_vx\n    - 64, _vy - 64, _vw + 128, _vh + 128, false, false);"," instance_activate_object(obj_Lights);\n  ","\n  ","The above code activates all instances within the room and then deactivates those that are outside of the limits of the current camera view, except for the object \"obj_Lights\" which are re-activated again at the end.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Deactivating Instances","\n        ","Next: ","instance_activate_region","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_activate_object"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"973"})