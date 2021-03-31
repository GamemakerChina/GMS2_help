rh._.exports({"0":["physics_particle_group_get_data"],"1":["physics_particle_group_get_data,phy_particle_data_flag_typeflags,phy_particle_data_flag_position,phy_particle_data_flag_velocity,phy_particle_data_flag_colour,phy_particle_data_flag_category,phy_particle_data_flag_color"],"2":["physics_particle_group_get_data,phy_particle_data_flag_typeflags,phy_particle_data_flag_position,phy_particle_data_flag_velocity,phy_particle_data_flag_colour,phy_particle_data_flag_category,phy_particle_data_flag_color"],"3":["\n  ","\n  ","\n  ","This function returns various pieces of information about a group of particles in the physics simulation using the given flags checked. The group index (its ID) is that which was returned by the function ","physics_particle_group_end()",",\n    and the buffer used must have been created previously using the function ","buffer_create()",". It should be of the \"grow\" type, with the size being approximately that of the expected return\n    data. The flags themselves are set using the constants given below, and you would use the ","bitwise ","or"," \"|\" to create a single flag value to get the desired information.","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Data Type","\n      ","\n      ","\n        ","phy_particle_data_flag_typeflags","\n        ","The flags value for the particle.","\n        ","buffer_u32","\n      ","\n      ","\n        ","phy_particle_data_flag_position","\n        ","The x and y position of the particle.","\n        ","2 x buffer_f32","\n      ","\n      ","\n        ","phy_particle_data_flag_velocity","\n        ","The horizontal and vertical speed.","\n        ","2 x buffer_f32","\n      ","\n      ","\n        ","phy_particle_data_flag_colour","\n        ","The colour and alpha value (hexadecimal).","\n        ","buffer_f32","\n      ","\n      ","\n        ","phy_particle_data_flag_category","\n        ","The particle category (as defined when you created the group to which it belongs).","\n        ","buffer_u32","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","physics_particle_group_get_data(group, buffer, flags)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","group","\n        ","The group index (ID) of the particle group to get the data from.","\n      ","\n      ","\n        ","buffer","\n        ","The (previously created) buffer to use to store the data.","\n      ","\n      ","\n        ","flags","\n        ","The flags to use to extract data about specific particle types.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Buffer data","\n  "," ","\n  ","\n  ","var count = physics_particle_group_count(gp);"," var flags = phy_particle_data_flag_position | phy_particle_data_flag_colour;"," if (count > 0)","     {\n    ","     var buffer = buffer_create(count * 12, buffer_grow, 4);","     physics_particle_group_get_data(gp, buffer, flags);","     for (var n = 0; n < count; n++;)","         {\n    ","         var xx = buffer_read(buffer, buffer_f32);","         var yy = buffer_read(buffer, buffer_f32);","         var argb = buffer_read(buffer, buffer_u32);","         var alpha = (argb >> 24) & 255;","         draw_sprite_ext(sprBlob,\n    0, xx, yy, 1, 1, 0, c_green, alpha);","         }\n    ","     buffer_delete(buffer);\n    ","     }\n  ","\n  ","The above code gets the position and velocity of the every particle in the group indexed by the variable \"gp\", stores the buffer data in a number of variables, and then uses that to draw a sprite at the position of each particle in the group.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_particle_group_get_data"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2178"})