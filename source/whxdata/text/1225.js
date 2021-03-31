rh._.exports({"0":["mp_potential_step"],"1":["mp_potential_step"],"2":["mp_potential_step"],"3":["\n  ","\n  ","\n  ","This function lets the instance take a step towards a particular position defined by xgoal/ygoal, all the while trying to avoid obstacles. When the instance would run into a solid instance (or any instance when checkall is true) it will change the direction\n    of motion to try to avoid that instance and move around it. This approach is not guaranteed to work but in most easy cases it will effectively move the instance towards the goal. The function returns whether the goal was reached or not.","\n  "," ","\n  ","\n  ","mp_potential_step(xgoal, ygoal, stepsize, checkall)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","xgoal","\n        ","The target x position.","\n      ","\n      ","\n        ","ygoal","\n        ","The target y position.","\n      ","\n      ","\n        ","stepsize","\n        ","The speed the instance moves in pixels per step.","\n      ","\n      ","\n        ","checkall","\n        ","Whether to check all instances (true) or just solid ones (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if instance_exists(obj_Enemy)","     {\n    ","     var inst;","     inst = instance_nearest(x, y, obj_Enemy);","     mp_potential_step(inst.x, inst.y, 5, false);","     }\n  ","\n  ","The above code first checks to see if there are any instances of \"obj_Enemy\" in the room. If there are it then finds the nearest one and stores its id in a variable. This variable is then used to tell ","mp_potential_step"," to move the\n    instance with the code towards the x/y position of the object that was found at a speed of 5 pixels per step while avoiding only instances flagged as solid.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_potential_step_object","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_potential_step"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1225"})