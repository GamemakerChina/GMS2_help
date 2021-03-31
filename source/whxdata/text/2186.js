rh._.exports({"0":["physics_particle_group_join"],"1":["physics_particle_group_join"],"2":["physics_particle_group_join"],"3":["\n  ","\n  ","\n  ","With this function you can join two particle groups together, and the joined groups will then behave as if they were both part of a single entity. The groups should have been created with over-lapping edges, as, if they are not already touching, they\n    will not be joined. The function takes the unique group IDs of the groups to join, as returned by the function ","physics_particle_group_end()",", and you can use the function any number of times for\n    a single group to join various soft bodies together.","\n  "," ","\n  ","\n  ","physics_particle_group_join(to, from)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","to","\n        ","The first particle group to join.","\n      ","\n      ","\n        ","from","\n        ","The second particle group to join.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;"," var groupflags = phy_particle_group_flag_solid;"," physics_particle_group_begin(flags, groupflags, mouse_x- 45, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);","    physics_particle_group_circle(50);\n    "," var g1 = physics_particle_group_end();"," physics_particle_group_begin(flags, groupflags, mouse_x + 45, mouse_y, 0, 0, 0, 0, c_white, 1, 1, 2);"," physics_particle_group_circle(50);\n    "," var g2 = physics_particle_group_end();"," physics_particle_group_join(g1, g2);","\n  ","The above code creates two circular particle groups and joins them together.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_group_delete","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_particle_group_join"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2186"})