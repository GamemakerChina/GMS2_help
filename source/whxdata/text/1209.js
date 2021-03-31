rh._.exports({"0":["move_bounce_all"],"1":["move_bounce_all"],"2":["move_bounce_all"],"3":["\n  ","\n  ","\n  ","With this function you can command an instance to bounce off ","all"," instances within the room, with the only exception being those that have no sprite or mask index assigned to them. You can also tell it to use precise collision checking when enabled,\n    but be aware that this requires all instances to have precise masks enabled and will greatly slow down your game when many instances are involved due to the amount of processing that has to be done. This should normally go in the step event of an\n    instance, but can be used selectively in a collision event too, as illustrated by the code example below.","\n  "," ","\n  ","\n  ","move_bounce_all( adv );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","adv","\n        ","Whether to enable advanced bouncing (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if other.visible","     {\n    ","     move_bounce_all(false);\n    ","     }\n  ","\n  ","The above code would be placed in a collision event with another object. It first checks to see if the object is visible and if it is it then performs the ","move_bounce_all()"," action. Note that in this case the bounce is selective and will only\n    be calculated for this collision, rather than for every instance, every step.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_bounce_solid","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["move_bounce_all"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1209"})