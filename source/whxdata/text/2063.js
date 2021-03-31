rh._.exports({"0":["point_direction"],"1":["point_direction"],"2":["point_direction"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function returns the direction of a vector formed by the specified components [x1,y1] and [x2,y2] in relation to the fixed x/y coordinates of the room. For example, in the image below if we want to get the direction from the player ship position\n    to the enemy position so that we can fire a missile at the enemy then we would use this function (the exact code is in the example below the image):","\n  ","\n  "," ","\n  ","\n  ","point_direction(x1, y1, x2, y2)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first component of the vector","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first component of the vector","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second component of the vector","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second component of the vector","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var ex, ey;"," ex = instance_nearest(x, y, enemy).x;"," ey = instance_nearest(x, y, enemy).y;"," with (instance_create_layer(x, y, \"Bullets\", obj_Missile))","     {\n    ","     direction = point_direction(x, y, ex, ey);","     }\n  ","\n  ","The above code will get the x and y coordinates of the nearest enemy and then pass them to a bullet object to use in the point_direction function to set its direction of travel correctly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","point_distance","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["point_direction"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2063"})