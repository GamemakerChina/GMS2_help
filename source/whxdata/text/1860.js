rh._.exports({"0":["ds_map_find_next"],"1":["ds_map_find_next"],"2":["ds_map_find_next"],"3":["\n  ","\n  ","\n  ","This function returns the next key stored in the DS map ","after"," the one specified in the function. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow. If no such\n    key exists then the function will return ","<undefined>",". You should always check this using the ","is_undefined()"," function.","\n  "," ","\n  ","\n  ","ds_map_find_next(id, key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to use.","\n      ","\n      ","\n        ","key","\n        ","The key to find the next one to.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real, string or undefined","\n  "," ","\n  ","\n  ","var size = ds_map_size(inventory);"," var key = ds_map_find_first(inventory);"," for (var i = 0; i < size; i++;)","     {\n    ","     if (key != \"gold\")","         {","         key = ds_map_find_next(inventory, key);","         }","     else break;","     }\n  ","\n  ","The above code creates some temporary variables and then gets the DS map size and finds the first key as stored by the computer in the map. It then uses a ","for"," loop to iterate through the DS map looking for the key value \"gold\". If\n    it finds it, it breaks out the loop.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_find_previous","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_find_next"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1860"})