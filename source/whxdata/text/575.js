rh._.exports({"0":["asset_get_index"],"1":["asset_get_index"],"2":["asset_get_index"],"3":["\n  ","\n  ","\n  ","You can use this function to get the unique identifying index for a game asset from its name. If the asset is not found, the function will return a value of -1, otherwise it will return the unique index id for the asset being checked. This id can then\n    be used in other functions as you would any other index value, like the ","sprite_index"," or the ","path_index",",\n    for example. Please note that although this function can be used to reference assets from strings (see example below) you should always make sure that the asset exists before using it otherwise you may get errors that will crash your game.","\n  "," ","\n  ","\n  ","asset_get_index(name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name of the game asset to get the index of (a string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Asset Index (Integer)","\n  "," ","\n  ","\n  ","var obj = asset_get_index(\"obj_Enemy_\" + string(global.Level));"," if obj > -1","     {\n    ","     instance_create_layer(random(room_width), random(room_height), obj, \"Enemy_Layer\");","     }\n  ","\n  ","The above code will get an object index from a string, and if that index exists, create an instance of the object in the game.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","asset_get_type","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["asset_get_index"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"575"})