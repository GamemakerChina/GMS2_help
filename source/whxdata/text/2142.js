rh._.exports({"0":["physics_joint_rope_create"],"1":["physics_joint_rope_create"],"2":["physics_joint_rope_create"],"3":["\n  ","\n  ","\n  ","A rope joint is one which is used to join two instances that you want to keep a constant distance apart, no matter what other forces are acting on it. With a distance joint, you can get \"joint stretching\" where the two fixtures will separate\n    and behave strangely should too much stress be put on the joint, however the rope joint does not do this and will not stretch any further than the maximum defined length. When you create a rope joint the two instances should already be created and\n    have a fixture assigned, then you define the two anchor points in room coordinates. The first anchor point is connected to instance 1, the second anchor point is connected to instance 2 and the distance and the maxlength argument sets the maximum\n    length constraint on the joint. The image below shows how this works:","\n  ","As you can see, the anchor points are specified as room coordinates so care must be taken when defining\n    them, especially if the instances are being created at the same time as the joints rather than being placed in the room through the room editor. You should also realise that the joints are created independently of the size of the sprite of the instances\n    or the fixtures they have attached. So, if you create a rope joint somewhere other than the origin of the instance, it is still valid and will constrain the two instances relative to the position at which it was created. If you set the \"col\"\n    value to ","true"," then the two instances can interact and collide with each other but ","only"," if they have collision events, however if it is set to ","false",", they will not collide no matter what.","\n  "," ","\n  ","\n  ","physics_joint_rope_create(inst1, inst2, w_anchor1_x, w_anchor1_y, w_anchor2_x, w_anchor2_y, maxlength, col)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","inst1","\n        ","The first instance to connect with the joint","\n      ","\n      ","\n        ","inst2","\n        ","The second instance to connect with the joint","\n      ","\n      ","\n        ","w_anchor1_x","\n        ","The first x coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor1_y","\n        ","The first y coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor2_x","\n        ","The second x coordinate for the joint, within the game world","\n      ","\n      ","\n        ","w_anchor2_y","\n        ","the second y coordinate for the joint, within the game world","\n      ","\n      ","\n        ","maxlength","\n        ","The maximum length that the joint can \"stretch\"","\n      ","\n      ","\n        ","col","\n        ","Whether the two instances can collide (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (index of the joint)","\n  "," ","\n  ","\n  ","var mainFixture, o_id;"," mainFixture = physics_fixture_create();"," physics_fixture_set_circle_shape(mainFixture, sprite_get_width(sprite_index) / 2);"," o_id=instance_create_layer(x+300, y, \"Instances\", obj_Rudder);"," physics_fixture_bind(mainFixture,\n    id);"," physics_fixture_bind(mainFixture, o_id);"," physics_joint_rope_create(id, o_id, x + 50, y, o_id.x - 50, o_id.y, 300, 0);"," physics_fixture_delete(mainFixture);\n  ","\n  ","The above code creates and defines a new fixture and then creates an instance of \"obj_Rudder\". The fixture is then assigned to the instance that is running the code as well as the newly created one and a rope joint is created between them.\n    Finally the fixture is deleted as it is no longer needed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_wheel_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_rope_create"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2142"})