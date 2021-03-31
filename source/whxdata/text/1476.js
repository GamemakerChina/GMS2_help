rh._.exports({"0":["draw_surface_general"],"1":["draw_surface_general"],"2":["draw_surface_general"],"3":["\n  ","\n  ","\n  ","This function combines the function ","draw_surface_ext()"," with the function ","draw_surface_part()",", adding in some additional blending options so that each corner of\n    the final surface part can be blended with an individual colour.","\n  ","NOTE: ","Gradient blending is not available for the HTML5 target unless WebGL is enabled.","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","draw_surface_general(id, left, top, w, h, x, y, xscale, yscale, rot, c1, c2, c3, c4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","left","\n        ","The left position in the surface of the part to be drawn.","\n      ","\n      ","\n        ","top","\n        ","The top position in the surface of the part to be drawn.","\n      ","\n      ","\n        ","w","\n        ","The width of the part to be draw, from left.","\n      ","\n      ","\n        ","h","\n        ","The height of the part to be draw, from top.","\n      ","\n      ","\n        ","x","\n        ","The x position of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","The y position of where to draw the surface.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling to draw the surface with.","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling to draw the surface with.","\n      ","\n      ","\n        ","rot","\n        ","The rotation or angle to draw the surface with.","\n      ","\n      ","\n        ","c1","\n        ","The colour of the top left corner of the surface.","\n      ","\n      ","\n        ","c2","\n        ","The colour of the top right corner of the surface.","\n      ","\n      ","\n        ","c3","\n        ","The colour of the bottom right corner of the surface.","\n      ","\n      ","\n        ","c4","\n        ","The colour of the bottom left corner of the surface.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha transparency to draw the surface with..","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_surface_general(surf, 8, 8, 32, 32, x, y, 2, 0.5, 180, c_white, c_white, c_black, c_black, 1);","\n  ","This will draw a 32x32 pixel area from 8x8 pixels into the surface. It will be stretched to double its usual width but half its usual height. It will be opaque, and upside down. The top area of the surface will be blended white and hence normal, but\n    the bottom area will be black, meaning the surface will go from normal to silhouette downwards in a smooth gradient.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","application_surface","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_surface_general"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1476"})