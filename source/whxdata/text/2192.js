rh._.exports({"0":["physics_particle_draw"],"1":["physics_particle_draw"],"2":["physics_particle_draw"],"3":["\n  ","\n  ","\n  ","This function will draw a sprite at the position of all the particles that share the same user defined category value, and that have flags which coincide with those set for the mask. The mask value is defined in the same way as you would define the\n    flags when creating the particle (see the function ","physics_particle_create()"," for an example), ie: using the ","bitwise ","or","    \"|\" to mask off the appropriate bits for each flag.","\n  ","NOTE",": This function will draw ","all"," particles in the physics simulation with flags that coincide with those of the mask, whether they are individual particles or groups, if the user category is the same.","\n  ","The drawn particle will use the colour and alpha values set when you created it, and will rotate with the angular momentum of the particle. However should you wish to scale the sprite or change any other of its drawn properties you should use the function\n    ","physics_particle_draw_ext()",".","\n  "," ","\n  ","\n  ","physics_particle_draw(typemask, category, sprite, subimg)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","typemask","\n        ","The mask to compare the particles flags with.","\n      ","\n      ","\n        ","category","\n        ","The user defined category to draw (use 0 to draw all categories).","\n      ","\n      ","\n        ","sprite","\n        ","The sprite to use for each particle.","\n      ","\n      ","\n        ","subimg","\n        ","The ","image_index"," of the sprite to draw.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var flags = phy_particle_flag_water | phy_particle_flag_viscous | phy_particle_flag_tensile;"," physics_particle_draw(flags, 2, sprBlob, 0);","\n  ","The above code will draw a sprite for all the particles in the user defined category \"2\" which have the same flags as the given mask.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Soft Body Particles","\n        ","Next: ","physics_particle_draw_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_particle_draw"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2192"})