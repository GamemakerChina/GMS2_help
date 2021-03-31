rh._.exports({"0":["object_is_ancestor"],"1":["object_is_ancestor"],"2":["object_is_ancestor"],"3":["\n  ","\n  ","\n  ","This function can be used to check an object and see if it is an ancestor or not of another object. So, both arguments need to be object indices and ","not"," the instance ids, and the first one is always the object that you\n    want to find out if it is a child of the second argument, which is always the object that want to check as the ancestor (parent).","\n  "," ","\n  ","\n  ","object_is_ancestor(obj, par);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","obj","\n        ","The object that is being checked as the child.","\n      ","\n      ","\n        ","par","\n        ","The object that is being checked as the ancestor (parent).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if object_is_ancestor(object_index, obj_Enemy)","     {\n    ","     instance_destroy();\n    ","     }\n  ","\n  ","The above code checks to see if the instance running the code is a child of the object \"obj_Enemy\", and if so it is destroyed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_set_mask","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["object_is_ancestor"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"942"})