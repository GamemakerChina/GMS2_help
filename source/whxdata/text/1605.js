rh._.exports({"0":["view_enabled"],"1":["view_enabled"],"2":["view_enabled"],"3":["\n  ","\n  ","\n  ","This variable controls whether any view ports that are visible within the room are enabled or not. If you have view ports set to visible and then disable this option, the whole room will be drawn to the screen scaled to the window size instead of the\n    different cameras being drawn through the view ports.","\n  "," ","\n  ","\n  ","view_enabled;","\n  "," ","\n  ","\n  ","Boolean (","true",": enabled, ","false",": disabled)","\n  "," ","\n  ","\n  ","if !view_enabled","     {\n    ","     view_visible[0] = true;","     view_enabled = true;","     }\n  ","\n  ","The above code checks to see if views are enabled for the room, and if they are not, it makes sure that view port[0] is visible and then enables views for the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","view_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["view_enabled"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1605"})