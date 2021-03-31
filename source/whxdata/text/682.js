rh._.exports({"0":["skeleton_bone_data_set"],"1":["skeleton_bone_data_set"],"2":["skeleton_bone_data_set"],"3":["\n  ","\n  ","\n  ","Your skeletal animation is made up of a number of \"bones\", which you will have defined and given names to in your animation program, and this function can be used to set certain data for the named bone at any time. Note that this data refers\n    to the ","default"," pose for the skeleton, and ","not"," the current pose that is being drawn (for that use the function ","skeleton_bone_state_set()","), and must be set from a previously created\n    ","DS map",", which should have the following keys and their equivalent values:","\n  ","\n    ","\"x\":"," The local x position of the bone relative to the parent bone.","\n    ","\"y\":"," The local y position of the bone relative to the parent bone.","\n    ","\"angle\":"," The local rotation of the bone relative to the parent bone.","\n    ","\"xscale\":"," The local horizontal scale of the bone.","\n    ","\"yscale\":"," The local vertical scale of the bone.","\n    ","\"parent\":"," The name (a string) of the parent bone.","\n  ","\n  "," ","\n  ","\n  ","skeleton_bone_data_set(bone, map);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","bone","\n        ","The name (as a string) of the bone.","\n      ","\n      ","\n        ","map","\n        ","The (previously created) DS map that stores the bone data.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var bone_map = ds_map_create();"," skeleton_bone_data_get(\"head\", bone_map);"," ds_map_replace(bone_map, \"parent\", \"body\");"," skeleton_bone_data_set(\"head\", bone_map);"," ds_map_destroy(bone_map);\n  ","\n  ","The above code creates a DS map and then populates it with the data from the bone named \"head\". It then replaces the \"parent\" bone key in the map with a new value and sets the \"head\" bone again with the new set of data.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Bones","\n        ","Next: ","skeleton_bone_state_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_bone_data_set"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"682"})