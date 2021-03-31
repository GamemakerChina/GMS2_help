rh._.exports({"0":["ds_priority_find_max"],"1":["ds_priority_find_max"],"2":["ds_priority_find_max"],"3":["\n  ","\n  ","\n  ","With this function you can find the value stored in the priority queue with the highest priority, and if more than one value has the same priority then any one of them could be returned in any order. However, unlike ","ds_priority_delete_max()",",\n    this function will not remove the value from the queue.","\n  "," ","\n  ","\n  ","ds_priority_find_max(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the priority queue to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real or String","\n  "," ","\n  ","\n  ","if ai_move","     {\n    ","     script_execute(ds_priority_find_max(ai_priority));\n    ","     }\n  ","\n  ","The above code checks an instance variable and if it returns ","true"," it will execute a script function indexed in the priority queue with the highest priority value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Priority Queues","\n        ","Next: ","ds_priority_find_min","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_priority_find_max"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1890"})