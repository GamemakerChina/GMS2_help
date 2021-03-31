rh._.exports({"0":["phy_angular_damping"],"1":["phy_angular_damping"],"2":["phy_angular_damping"],"3":["\n  ","\n  ","\n  ","This variable can be used to set the angular damping of the instance, or it can be used to get the current angular damping. The damping is the amount of \"resistance\" to angular rotation that the physics enabled instance has, with a lower value\n    permitting the instance to rotate faster after a collision (for example) and a higher value making it require a more forceful push and rotate slower","\n  "," ","\n  ","\n  ","phy_angular_damping;","\n  "," ","\n  ","\n  ","Real (single precision floating point value, or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  ","\n  ","if place_meeting(phy_position_x, phy_position_y, obj_Water)","     {\n    ","     phy_angular_damping = 10;","     }\n    "," else\n    ","     {\n    ","     phy_angular_damping = 3;","     }\n  ","\n  ","The above code will check for a collision between the calling instance and instances of \"obj_Water\" and change the angular damping accordingly.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_linear_velocity_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["phy_angular_damping"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2197"})