rh._.exports({"0":["Forces"],"2":["Forces,Impulses,Torque,Angular Impulse"],"3":["\n  ","\n  ","\n  ","In the GameMaker Studio 2 physics world, instances aren't only affected by gravity and collisions, they are also affected by the forces that you choose to apply to them, and knowing the right force to apply is very\n    important when you want to control an instance correctly within the physics simulation. There are two forces which can be used and applied to your fixtures:","\n  ","\n    ","Impulses",": An impulse will set the direction and velocity ","immediately"," after it is applied, making it ideal for things like springs, or shooting bullets, etc...","\n    ","Forces",": A force will act on the existing velocity and direction and change it over time, making it ideal for things like wind, or a magnet, etc...","\n    ","Torque",": Torque governs the likelihood for an instance to keep rotating around its axis after a force has been applied, and the speed at which it will stop rotating. Adding torque is a gradual process, much like using a force to add movement.","\n    ","Angular Impulse",": An angular impulse can be used to set a fixture spinning instantly, much like a regular impulse can be used to set a fixture instantly in movement.","\n  ","\n  ","The following functions exist to apply different types of forces to physics enabled instances, and each function gives a fuller explanation of how the force will be applied than the outlines given above:","\n  "," ","\n  ","\n    ","physics_apply_force","\n    ","physics_apply_impulse","\n    ","physics_apply_local_force","\n    ","physics_apply_local_impulse","\n    ","physics_apply_torque","\n    ","physics_apply_angular_impulse","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics","\n        ","Next: ","Fixtures","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Forces"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"2101"})