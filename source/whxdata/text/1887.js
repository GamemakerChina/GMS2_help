rh._.exports({"0":["ds_priority_delete_max"],"1":["ds_priority_delete_max"],"2":["ds_priority_delete_max"],"3":["\n  ","\n  ","\n  ","This function will return the value that has the highest priority in the queue and then remove the value (and priority) from the data structure. If more than one value has the same priority, then any one of them could be returned in any order, but all\n    other values with the same priority will still be in the queue.","\n  "," ","\n  ","\n  ","ds_priority_delete_max(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the priority queue to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Data type stored in the priority","\n  "," ","\n  ","\n  ","if ai_move","     {\n    ","     script_execute(ds_priority_delete_max(ai_priority));\n    ","     }\n  ","\n  ","The above code checks an instance variable and if it returns ","true"," it will execute a script indexed in the priority queue with the highest priority value and then remove that script from the queue.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Priority Queues","\n        ","Next: ","ds_priority_delete_min","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_priority_delete_max"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1887"})