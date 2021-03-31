rh._.exports({"0":["draw_roundrect_colour"],"1":["draw_roundrect_colour,draw_roundrect_color"],"2":["draw_roundrect_colour,draw_roundrect_color"],"3":["\n  ","\n  ","\n  ","With this function you can draw either an outline of a rounded rectangle or a filled rounded rectangle where the (x1,y1) position is the top left corner and the (x2,y2) position is the bottom right corner. If it is filled you can define the individual\n    colours for the centre and the edges, and if these colours are not the same, you will get a gradient effect from one to the other (the colour settings will over-ride the base colour set with the function ","draw_set_colour()",").You\n    can define how precise the drawing of the corners is with the function ","draw_set_circle_precision()",", but the corners are always drawn with a fixed radius. Should you need to change the corner radius\n    you should use the function ","draw_roundrect_colour_ext()",". Please note that the rectangle being drawn may need different values (+/-1 on the x, y, or width or height) to be drawn with the desired\n    dimensions due to differences across the various supported platforms.","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_roundrect_colour(x1, y1, x2, y2, col1, col2, outline);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the left of the rounded rectangle.","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top of the rounded rectangle.","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the right of the rounded rectangle.","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the bottom of the rounded rectangle.","\n      ","\n      ","\n        ","col1","\n        ","The center colour.","\n      ","\n      ","\n        ","col2","\n        ","The outside edge colour.","\n      ","\n      ","\n        ","outline","\n        ","Whether the rectangle is an outline (true) or filled in (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_roundrect_colour(50, 50, 200, 200, c_black, c_white, false);","\n  ","This would draw a filled-in square with rounded corners and with a smooth black/white gradient from the center to the edges.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_roundrect_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_roundrect_colour"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1365"})