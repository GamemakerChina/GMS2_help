rh._.exports({"0":["physics_joint_enable_motor"],"1":["physics_joint_enable_motor"],"2":["physics_joint_enable_motor"],"3":["\n  ","\n  ","\n  ","When you have a joint with a motor (","prismatic"," or ","revolute","), you may want to be able to switch the motor on or off depending on variables and conditions\n    within the game. For this, you need to have stored the index of the joint previously in a variable and then you can switch the motor on or off by using this function and setting the \"motor\" argument to ","true"," or ","false",".","\n  "," ","\n  ","\n  ","physics_joint_enable_motor(joint, motor)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","joint","\n        ","The joint that you wish to enable or disable the motor on","\n      ","\n      ","\n        ","motor","\n        ","Whether you wish to turn the motor on (true) or off (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var t_fix = physics_fixture_create();"," physics_fixture_set_circle_shape(t_fix, sprite_get_width(sprite_index) / 2);"," var o_id=instance_create_layer(x+300, y, \"Instances\", obj_Door);"," physics_fixture_bind(t_fix, id);"," physics_fixture_bind(t_fix,\n    o_id);"," perma_joint = physics_joint_revolute_create(id, o_id, x+25, y, -90, 90, 1, 10, 2, 0, 0);"," physics_joint_enable(perma_joint, 1);"," physics_fixture_delete(t_fix);\n  ","\n  ","The above code creates and defines a new fixture and then creates an instance of \"obj_Door\", binding the created fixture to the two instances. They are then joined by a revolute joint with no motor and the angles limited to a +/- 90 degree\n    swing, and we store the joint index in the variable \"perma_joint\". We then switch the motor on using this variable, before finally deleting the fixture from memory as it is no longer needed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_get_value","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_enable_motor"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2147"})