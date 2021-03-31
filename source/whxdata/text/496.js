rh._.exports({"0":["Accessors"],"1":["Accessors"],"2":["Accessors,@,[| ],[@ ],[# ],[? ],grid accessor,list accessor,map accessor,array accessor"],"3":["\n  ","\n  ","\n  ","The GameMaker Language (GML) also permits you to access certain ","Data Structures"," and ","Arrays"," through the use of logical expressions called ","accessors",". This\n    is structured in a similar way as when you are normally working with an array, only we use an ","identifier symbol"," before the first argument to tell GameMaker Studio 2 that you are working on a (previously created) data structure or the array\n    literal.","\n  "," ","\n  ","DS Lists [| ]","DS Lists [| ]","\n  ","\n    ","The syntax for ","DS lists"," is:","\n    ","list_index[| index]","\n    ","So when you have used ","ds_list_create()"," to create your list, you would use the list index (that you have stored in a variable) to reference it, with the \"index\" value being the position in the list to set or add. For example, the\n      following code creates a list and then adds 10 entries, setting each entry to random number from 0 to 9:","\n    ","ds = ds_list_create();"," var index = 0;"," repeat(10)\n      ","     {\n      ","     ds[| index++] = irandom(9);","     }\n    ","\n    ","Note that if you are using an expression to add a reference to an index that already has a value, the previous value will be replaced rather than have a further index added to the list. To add further entries you would need to know the ds_list size\n      and add them to the end. It is also worth noting that you can set a list index that is ","greater"," than the size of the list being referenced, and this will set that value, expanding the list at the same time and initialising all the positions\n      in the list up to the given index as 0.","\n    ","Once you have created your list structure and filled it with data, to get values from the list you would have something like:","\n    ","value = ds[| 5];","\n    ","The above will get the value from position 5 (the sixth index, since lists start at 0) and store it in a variable. If you supply a position that is outside of the list size then the value ","undefined"," will be returned, which you can check for\n      using the function ","is_undefined()",".","\n    "," ","\n  ","\n  ","DS Maps [? ]","DS Maps [? ]","\n  ","\n    ","The syntax for ","DS maps"," is:","\n    ","map_index[? key]","\n    ","After creating your map with ","ds_map_create()",", you would use the map index that you have stored in a variable to reference it, with the \"key\" value being the map key to set or get. For example, the following code creates a map and\n      then adds a few entries to it using this syntax:","\n    ","ds = ds_map_create();"," ds[? \"Name\"] = \"Hamish\";"," ds[? \"Company\"] = \"MacSeweeny Games\";"," ds[? \"Game\"] = \"Catch The Haggis\";","\n    ","Note that if the map already contains the same key value as you are trying to add, it will not create a duplicate key with the new value, but rather the previous value will be replaced.","\n    ","Once you have created your map structure and filled it with data, to get values from a specific map key you would have something like this:","\n    ","value = ds[? \"Name\"];","\n    ","The above will get the value from the key \"Name\" and store it in a variable, but be aware that if the given key does not exist in the DS map, then the value returned will be ","undefined",". This can be checked for using the function\n      ","is_undefined()",".","\n    "," ","\n  ","\n  ","DS Grids [# ]","DS Grids [# ]","\n  ","\n    ","The syntax for ","DS grid"," is:","\n    ","grid_index[# xpos, ypos]","\n    ","After creating your grid with the ","ds_grid_create()"," function, you would use the grid index that you have stored in a variable to reference it, with the \"xpos\" and \"ypos\" being the position within the grid to get or set\n      a value. For example, the following code creates a grid, clears it to 0, then and then adds a few entries to it:","\n    ","ds = ds_grid_create();"," ds_grid_clear(ds, 0);"," var gw = ds_grid_width(ds) - 1;"," var gh = ds_grid_height(ds) - 1;"," repeat(10)\n      ","     {\n      ","     var xx = irandom(gw);","     var yy = irandom(gh);","     if (ds[# xx, yy] == 0)","         {\n      ","         ds[# xx, yy] = 1;","         }\n      ","     }\n    ","\n    ","Once you have created your grid structure and filled it with data, to get values from a specific grid position you would have something like:","\n    ","value = ds[# mouse_x div 16, mouse_y div 16];","\n    ","The above will get the value from the given ds_grid based on the mouse position (divided by the \"cell\" width in the room to get the correct location). If you supply a position that is outside of the grid boundaries then the value ","undefined","      will be returned, which you can check for using the function ","is_undefined()",".","\n    "," ","\n  ","\n  ","Arrays [@ ]","Arrays [@ ]","\n  ","\n    ","Arrays also have their own accessors which works in a similar way as those listed above for data structures. However array accessors have an interesting property and that is to permit you to modify an array from a ","script function","      or ","method"," without having to copy it. When you pass an array into a function, it is ","passed by reference",", meaning that the array itself isn't being given into the script but rather it is simply\n      being referenced to get the data. Normally if you then need to change the array, it would be ","copied ","to the script and then you would need to pass back (return) the copied array for the original array to be updated. This can have costly\n      processing overheads, and so you can use the accessor instead, as that will change the original array ","directly ","without the need for it to be copied. You can see how this works in the examples below.","\n    ","The syntax for arrays is:","\n    ","array[@ xpos]","\n    ","After you have created your array in an instance, you can then pass it to a script by reference and use the accessor ","@"," to change it directly. For example you would create the array and call the funtion like this:","\n    ","array[99] = 0;"," array_populate(array);\n    ","\n    ","The function itself would have something like this:","\n    ","function array_populate(_array)","     {","     var a = _array; var i = 0; repeat(25)","         {","         i = irandom(99);","         while (a[i] != 0)","             {","             i = irandom(99);","             }","   \n        a[@ i] = 100;","         }","     }","\n    ","All this function is doing is selecting 25 random positions in the array and setting the value of the chosen array position to 100.","\n    ","NOTE: You cannot use the array accessor ","@","  when working with the ","argument[n]"," array in script functions.","\n    "," ","\n    "," ","\n  ","\n  ","Structs [$ ]","Structs [$ ]","\n  ","\n    ","The syntax for ","structs"," is","\n    ","struct[$ \"name\"]","\n    ","This accessor is essentially a wrapper for the functions ","variable_struct_get()"," and ","variable_struct_set()",",\n      and you would use it much like the accessor for a DS map. For example, if you have created a struct and want to retrieve a value from a variable called \"my_health\" then you'd do:","\n    ","\n    ","var _hp = struct[$ \"my_health\"];","\n    ","As you can see, you don't supply the variable itself, but rather a ","string"," with the variable. Note that if the struct does not have a variable with the given name, then the accessor will return ","undefined"," as\n      the value.","\n    ","To set a variable in a struct then you would do the following","\n    ","struct[$ \"my_score\"] = 100;","\n    ","As with getting a value, you supply the name of the variable to set as a string, and it will be set to the value given. If the variable name used doesn't exist in the struct, then it will be created and set to the given value.","\n    ","\n  ","\n  "," ","\n  ","An important feature of accessors is the fact that they can be ","chained"," together. This means that if you have several nested data structures and/or arrays, there is no longer the need to use a variety of functions to get access to a value that\n    is deep within the nested structure. For example, say you have an array, and each item in the array is a DS list, like this:","\n  ","array = array_create(3);"," for (var i = 0; i < 3; ++i;)","     {\n    ","     array[i] = ds_list_create();","     switch(i)\n    ","         {\n    ","         case 0:","             with (obj_Wall) ds_list_add(array[i], id);","             break;\n    ","         case 1:","             with (obj_Door) ds_list_add(array[i], id);","             break;\n    ","         case 2:","             with (obj_Chest) ds_list_add(array[i], id);","             break;\n    ","         }\n    ","     }\n  ","\n  ","In the above code we've created a 3 item array and assigned a DS list to each of them, and then we've populated the different lists with the instance IDs of various objects in the game. Now, to access an ID in one of the lists we can do the\n    following:","\n  ","var _list = array[0];"," var _id = ds_list_find_value(_list, 0);","\n  ","However, you can do the same thing using chained accessors in a much cleaner way that uses less code:","\n  ","var _id = array[0][| 0];","\n  ","You can chain multiple accessors together in this way and they can be of multiple types to get access to the information stored in each part of the nested structure. Here are some more examples:","\n  ","// Access a grid that has been added to a list that is part of a map:"," var _a = data[? \"lists\"][| 0][# 0, 0];","\n    "," // Access an array nested in a list from a script and modify it:"," data[| 0][@ 10] = 100;","\n    "," // Access a map nested in a grid nested in a list nested in an array:"," data[0][| 10][# 3, 4][? \"key\"] = \"hello world\";","\n  ","Using chained accessors for things not only means you can write more compact code, it will also permit you to use iteration (for example, using a ","for"," loop) and other techniques to access your data in\n    a cleaner and more intuitive manner.","\n  ","It is worth noting that when using accessors in this way, you should always use the ","@"," accessor for arrays, as otherwise you will be adding extra overhead to any actions being performed. As mentioned above, by default arrays\n    are passed by reference into functions and then use the \"copy on write\" behavior when modified. However, if the array is part of a chain, then the previous item in the chain will be updated with the copied array and the \"original\"\n    will be deleted. For example, doing something like this:","\n  ","// In an object event"," data[| 0][0] = 100;","\n    "," // In a function"," data[| 0][0] = 200;","\n  ","achieves the same results as doing this:","\n  ","// In an object event"," data[| 0][0] = 100;","\n    "," // In a function"," data[| 0][@ 0] = 200;","\n  ","However, the second example is better as it works without the unnecessary overhead of copying the entire array first.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Script Functions And Variables","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Accessors"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"id":"496"})