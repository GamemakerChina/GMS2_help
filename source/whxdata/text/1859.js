rh._.exports({"0":["ds_map_find_last"],"1":["ds_map_find_last"],"2":["ds_map_find_last"],"3":["\n  ","\n  ","\n  ","This function returns the last key stored in the ","DS map",". ","This is not the last key in the order that you have added them!"," ","DS maps"," are not stored in a linear form, for that use\n    ","DS lists",", so all this does is find the last key as stored by the computer. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow.","\n  "," ","\n  ","\n  ","ds_map_find_last(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to use.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real or String","\n  "," ","\n  ","\n  ","var size = ds_map_size(inventory);"," var key = ds_map_find_last(inventory);"," for (var i = size; i > 0; i--;)","     {\n    ","     if (key != \"gold\")","         {","         key = ds_map_find_previous(inventory, key);","         }","     else break;","     }\n  ","\n  ","The above code creates some temporary variables and then gets the DS map size and finds the last key as stored by the computer in the map. It then uses a ","for"," loop to iterate back through the DS map looking for the key value \"gold\".\n    If it finds it, it breaks out the loop.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_find_next","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_find_last"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1859"})