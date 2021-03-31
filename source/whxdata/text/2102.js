rh._.exports({"0":["physics_apply_force"],"1":["physics_apply_force"],"2":["physics_apply_force"],"3":["\n  ","\n  ","\n  ","When working with physics you need to apply not only gravity to objects, but forces as well. A force is any influence that causes an object to undergo a change in speed, a change in direction, or a change in shape, and is defined in the GameMaker Studio 2    physics world the same as we define gravity, by getting the vector from the two xforce/yforce components. It should be noted that forces are not applied to the center of mass of the object, but rather at a point in the room and they will change the\n    direction and speed as well as the torque (spin) dependant on any other forces that are working on the object (like gravity). Here is an example image to help illustrate:","\n  ","In the above example the spring object at the bottom has created a force on the ball\n    object getting it to move in a different direction. The exact force is defined by the vector we get from the components xforce/yforce in relation to the xpos/ypos coordinates - which simply means that the force is calculated as the distance from xpos/ypos\n    to xforce/yforce in Newtons (a Newton being defined as the amount of net force required to accelerate a mass of one kilogram at a rate of one meter per second squared)and the direction is the angle that we get from xpos/ypos to xforce/yforce. The\n    code for a collision like the above would go in the collision event of the spring object and would look something like that provided in the example below.","\n  ","NOTE",": The physics world uses meters for all its calculations, and the ratio of pixels per meter is defined in the room editor or using ","physics_world_create()",".","\n  "," ","\n  ","\n  ","physics_apply_force(xpos, ypos, xforce, yforce)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","xpos","\n        ","The x coordinate ","in the room"," where the force will be applied","\n      ","\n      ","\n        ","ypos","\n        ","The y coordinate ","in the room"," where the force will be applied","\n      ","\n      ","\n        ","xforce","\n        ","the x component of the force vector","\n      ","\n      ","\n        ","yforce","\n        ","the y component of the force vector","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","with (other)","     {\n    ","     physics_apply_force(x, y, 0, -30);","     }\n  ","\n  ","The code above will apply code to the ","other"," object in the collision with a force of 30 Newtons and a direction.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Forces","\n        ","Next: ","physics_apply_impulse","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_apply_force"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2102"})