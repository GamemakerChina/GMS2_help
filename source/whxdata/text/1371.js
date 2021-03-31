rh._.exports({"0":["draw_button"],"1":["draw_button"],"2":["draw_button"],"3":["\n  ","\n  ","\n  ","This function will draw a very simple, rectangular \"button\" using the currently selected draw colour and alpha where the ","up"," argument defines how the beveled edge effect looks, as shown in the image below:","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the\n    following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then\n    the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_button(x1, y1, x2, y2, up);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the left of the button","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the top of the button","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the right of the button","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the bottom of the button","\n      ","\n      ","\n        ","up","\n        ","Whether the button is up (","true",") or down (","false",")","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_button(100, 100, 200, 150, !mouse_check_button(mb_left));","\n  ","This will draw a button which will appear pressed if the left mouse button is held down.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_healthbar","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_button"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1371"})