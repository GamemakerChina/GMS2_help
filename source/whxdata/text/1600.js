rh._.exports({"0":["camera_get_view_target"],"1":["camera_get_view_target"],"2":["camera_get_view_target"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the follow target of the given camera. The return value can be an object index, an instance ID or -1 if no follow target has been set.","\n  "," ","\n  ","\n  ","camera_get_view_target(camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Object Index, Instance ID, or -1 if no target is set.","\n  "," ","\n  ","\n  ","var target = camera_get_view_target(view_camera[0]);"," if target != obj_Player","     {\n    ","     camera_set_view_target(view_camera[0], obj_Player);","     }\n  ","\n  ","The above code retrieves the follow target of the camera assigned to view port[0] and then checks this to see if it matches the object index \"obj_Player\". If it does not then the view camera is set to follow an instance of that object.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","camera_get_default","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["camera_get_view_target"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1600"})