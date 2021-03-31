rh._.exports({"0":["draw_surface_part"],"1":["draw_surface_part"],"2":["draw_surface_part"],"3":["\n  ","\n  ","\n  ","With this function you can draw part of any surface at a given position within the room. As with ","draw_surface()"," you can specify a surface, but you then need to specify the ","relative coordinates"," within the\n    surface of an area to select for drawing. This means that a left position of 0 and a top position of 0 would be the top left corner of the surface and all further coordinates should be taken from that position.","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","draw_surface_part(id, left, top, w, h, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","left","\n        ","The left position in the surface of the part to be drawn.","\n      ","\n      ","\n        ","top","\n        ","The top position in the surface of the part to be drawn.","\n      ","\n      ","\n        ","w","\n        ","The width of the part to be draw, from left.","\n      ","\n      ","\n        ","h","\n        ","The height of the part to be drawn, from top.","\n      ","\n      ","\n        ","x","\n        ","The x position of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","The y position of where to draw the surface.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_surface_part(surf, 8, 8, 32, 32, x, y);","\n  ","This will draw a 32x32 area 8px by 8px in from the top left of the surface indexed in \"surf\", at the instances (x,y) position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","draw_surface_part_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_surface_part"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1470"})