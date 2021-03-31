rh._.exports({"0":["point_distance_3d"],"1":["point_distance_3d"],"2":["point_distance_3d"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function takes the supplied components of the vector and returns the length (distance) of the vector. It works in exactly the same way as ","point_distance()"," but with the addition of factoring in the z value\n    (depth) for use in 3D space.","\n  "," ","\n  ","\n  ","point_distance_3d(x1, y1, z1, x2, y2, z2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first component of the vector","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first component of the vector","\n      ","\n      ","\n        ","z1","\n        ","The z coordinate of the first component of the vector","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second component of the vector","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second component of the vector","\n      ","\n      ","\n        ","z2","\n        ","The z coordinate of the second component of the vector","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var inst, ex, ey, ez;"," inst = instance_nearest(x, y, enemy);"," if inst","     {\n    ","     ex = inst.x;","     ey = inst.y;","     ez = inst.z;","     if point_distance_3d(x, y, z, ex, ey, ez) < 200","         {\n    ","         instance_create_layer(x, y, \"Bullets\", obj_Missile)","         }\n    ","     }\n  ","\n  ","The above code will get the x and y and z coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance\n    of \"obj_Missile\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","distance_to_object","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["point_distance_3d"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2065"})