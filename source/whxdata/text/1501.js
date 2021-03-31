rh._.exports({"0":["part_system_depth"],"1":["part_system_depth"],"2":["part_system_depth"],"3":["\n  ","\n  ","\n  ","With this function you can set the draw depth for the particle system, much the same as you can set the ","render depth"," of different layers within the room, where a low draw depth means that it will appear on top of all things drawn with a higher\n    depth, and a high draw depth placing it below everything with a lower draw depth.","\n  "," ","\n  ","\n  ","part_system_depth( ind, depth );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle system to change.","\n      ","\n      ","\n        ","depth","\n        ","The depth at which to set the particle system.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","global.Sname = part_system_create();"," part_system_depth(global.Sname, -1000 );","\n  ","The above code will create a particle system and store its index in the global variable \"Sname\". this system is then given a low depth of -1000, meaning that it will appear above everything with a higher draw depth.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_position","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_system_depth"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1501"})