rh._.exports({"0":["part_system_layer"],"1":["part_system_layer"],"2":["part_system_layer"],"3":["\n  ","\n  ","\n  ","This function can be used to switch a particle system from its current layer to a new one. You supply the particle system ID value (as returned by the function ","part_system_create_layer()",") and then\n    the unique layer ID (as returned by the function ","layer_create()"," or the name of the layer to use as a string - for example \"instance_layer\" -\n    as defined in the room editor), and the system will be moved to the new layer.","\n  "," ","\n  ","\n  ","part_system_layer(ps, layer);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ps","\n        ","The particle system ID","\n      ","\n      ","\n        ","layer","\n        ","The new layer ID","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (part_system_get_layer(global.p_sys) != \"effects_layer\")","     {\n    ","     part_system_layer(global.p_sys, \"effects_layer\";","     }\n  ","\n  ","The above code will check a particle system to see what layer it is on and if it is not on the given layer it will be changed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_depth","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_system_layer"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1500"})