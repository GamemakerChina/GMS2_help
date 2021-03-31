rh._.exports({"0":["part_type_speed"],"1":["part_type_speed"],"2":["part_type_speed"],"3":["\n  ","\n  ","\n  ","This function is used to determine the speed of the particle when it is created and can also be used to make the particle increase or decrease its speed over its lifetime. The minimum and maximum speed values default at 1, which means that the particle\n    will move 1 pixel each step, and if they are set to the same value, the initial speed for all particles will be the same, but if set to different values, each particle will start with a random speed from within the given range. For example if you\n    have a minimum of 3 and a maximum of 6, all particles will be created with a speed between three and six pixels per step.","\n  ","You can also set an increment value that will make the particle move faster (if a positive number) or slower (if a negative number) over its lifetime, with the given amount being added to the particle speed each and every step. This value can be a minimum\n    of (+/-)0.01.","\n  ","Finally, you can set the \"wiggle\" factor. This is a value that will be added or subtracted randomly to the speed each step of the particles lifetime. Obviously larger values are more pronounced than smaller ones, and this value can even be\n    a negative with the maximum range being between -20 and 20.","\n  "," ","\n  ","\n  ","part_type_speed(ind, speed_min, speed_max, speed_incr, speed_wiggle);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle type to change.","\n      ","\n      ","\n        ","speed_min","\n        ","The minimum speed the particle can start at.","\n      ","\n      ","\n        ","speed_max","\n        ","The maximum speed the particle can start at.","\n      ","\n      ","\n        ","speed_incr","\n        ","How much the particle speed should increase or decrease per step.","\n      ","\n      ","\n        ","speed_wiggle","\n        ","How much should randomly be added or subtracted from the particle's speed per step.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","part_type_shape(particle2, pt_shape_flare);"," part_type_size(particle2, 0.01, 0.50, 0.01, 20);"," part_type_scale(particle2, 0.10, 0.10);"," part_type_colour3(particle2, 4210816, 4227327, 8240895);"," part_type_alpha3(particle2, 0.20, 0.80,\n    0);"," part_type_speed(particle2, 5, 10, -0.20, 20);"," part_type_direction(particle2, 0, 359, -1, 20);"," part_type_gravity(particle2, 0, 270);"," part_type_orientation(particle2, 0, 359, 0, 20, 1);"," part_type_blend(particle2, 1);","    part_type_life(particle2, 1, 20);","\n  ","The above code will set various particle values including the speed which sets a minimum speed of five and a maximum speed of ten, with the speed slowing down by a value of -0.2 each step. The speed will also wiggle by a random value between 0 and 20\n    each step.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Types","\n        ","Next: ","part_type_direction","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_type_speed"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1523"})