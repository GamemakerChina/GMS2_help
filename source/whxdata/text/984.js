rh._.exports({"0":["instance_change"],"1":["instance_change"],"2":["instance_change"],"3":["\n  ","\n  ","\n  ","You can use this function to change one instance of an object into another instance of a different object, and while doing so decide whether to perform the initial instances Destroy and Clean Up Events and the new instances Create Event. In this way,\n    you can have (for example) a bomb change into an explosion - in which case the \"perf\" argument would probably be true as you would want the bomb to perform its Destroy Event and Clean Up Event, as well as the explosion to perform its Create\n    Event - or you could have your player character change into a different one - in which case the \"perf\" argument would probably be false as you do not want the instances to perform their Create and Destroy/Clean Up events.","\n  ","It is worth noting that changing the instance means that you should perform no further actions with that instance until the next step, in particular trying to access variables etc... as that will cause an error. Basically, you change the instance but\n    it is not actually available until the end of the current step, so to access any of the variables it contains directly (for example, calling ","obj_Changed.x",") will not work.","\n  ","WARNING!"," When changing a physics enabled instance, the physical properties ","will not be carried over"," to the new instance being changed into. Therefore you should have code in place to \"transfer\" the physics state of the current\n    instance over to the new instance, or have defined the new instances physical properties in its Create Event, or in the object editor. For this reason it is recommended that you not use this function with physics enabled instances, but rather use\n    a combination of ","instance_destroy()"," and ","instance_create_layer()",".","\n  ","\n  "," ","\n  ","\n  ","instance_change(obj, perf);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The new object the calling object will change into.","\n      ","\n      ","\n        ","perf","\n        ","Whether to perform that new object's create and destroy events (true) or not (false).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check(vk_enter)","     {\n    ","     instance_change(obj_Player_Swimming, false);","     exit;\n    ","     }\n  ","\n  ","The above code will change the calling instance into an instance of \"obj_Player_Swimming\" without performing the original instances destroy event nor the new instances create event when the user presses the \"Enter\" key, exiting the\n    code block when done.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_copy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_change"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"984"})