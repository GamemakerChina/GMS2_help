rh._.exports({"0":["rectangle_in_triangle"],"1":["rectangle_in_triangle"],"2":["rectangle_in_triangle"],"3":["\n  ","\n  ","\n  ","This function will check a rectangular area that you define to see if it is either not in collision, completely within the destination bounds, or if it is simply touching, a defined triangular area. If they are not touching at all the function will\n    return 0, if the source is completely within the destination it will return 1, and if they are simply overlapping then it will return 2. The image below illustrates this:","\n  ","\n  ","\n  ","rectangle_in_triangle(sx1, sy1, sx2, sy2, dx1, dy1, dx2, dy2, dx3, dy3);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sx1","\n        ","The x coordinate of the left side of the source rectangle.","\n      ","\n      ","\n        ","sy1","\n        ","The y coordinate of the top side of the source rectangle.","\n      ","\n      ","\n        ","sx2","\n        ","The x coordinate of the right side of the source rectangle.","\n      ","\n      ","\n        ","sy2","\n        ","The y coordinate of the bottom side of the source rectangle.","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first side of the triangle to check.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first side of the triangle to check.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second side of the triangle to check.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second side of the triangle to check.","\n      ","\n      ","\n        ","x3","\n        ","The x coordinate of the third side of the triangle to check.","\n      ","\n      ","\n        ","y3","\n        ","The y coordinate of the third side of the triangle to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var inst = instance_nearest(x, y, obj_Player);"," if instance_exists(inst)","    {\n    ","    var x1 = x + lengthdir_x(100, image_angle - 45);","    var y1 = y + lengthdir_y(100, image_angle - 45);","    var x2 = x + lengthdir_x(100, image_angle + 45);","    var y2 = y + lengthdir_y(100, image_angle + 45);","    if rectangle_in_triangle(inst.bbox_left,\n    inst.bbox_top, inst.bbox_right, inst.bbox_bottom, x, y, x1, y1, x2, y2) == 1","       {\n    ","       can_see = true;","       }\n    ","    }\n  ","\n  ","The above code uses the ","rectangle_in_triangle"," function as a \"cone of vision\" to check for an instance of \"obj_player\". If the full bounding box is within the given triangular area, it will set a variable to ","true",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Collisions","\n        ","Next: ","rectangle_in_circle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["rectangle_in_triangle"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1263"})