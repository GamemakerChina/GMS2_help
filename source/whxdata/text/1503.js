rh._.exports({"0":["part_system_destroy"],"1":["part_system_destroy"],"2":["part_system_destroy"],"3":["\n  ","\n  ","\n  ","With this function you can destroy a given particles system and remove it from memory. This should always be called when the system is no longer needed, like at the end of a room, or in the destroy event of an instance, otherwise you could end up with\n    particles appearing in later rooms and no way to remove them as well as a memory leak which will eventually crash your game.","\n  ","NOTE",": This function will also destroy and remove any emitters that may have been created and associated with the system being destroyed.","\n  "," ","\n  ","\n  ","part_system_destroy(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle system to destroy.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (global.player_hp <= 0)","     {","     part_system_destroy(p_sys);","     room_goto_next();","     }","\n  ","The above code checks to see if a global variable value is less than or equal to zero, and if it is then it destroys the particle system referenced in the given variable and then goes to the next room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_particles_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_system_destroy"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1503"})