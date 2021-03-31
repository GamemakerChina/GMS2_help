rh._.exports({"0":["ds_list_delete"],"1":["ds_list_delete"],"2":["ds_list_delete"],"3":["\n  ","\n  ","\n  ","With this function you can remove the value stored at a specific position within the list.","\n  "," ","\n  ","\n  ","ds_list_delete(id, pos);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the list to change.","\n      ","\n      ","\n        ","pos","\n        ","Where in the list to delete the value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if (ds_list_size(sc_list) > 10)","     {\n    ","     while (ds_list_size(sc_list) > 10)","         {\n    ","         ds_list_delete(sc_list, 0);","         }\n    ","     }\n  ","\n  ","The above code checks the size of a DS list and if it is larger than ten, it loops through the list removing the top value (position 0) until the list has only 10 entries.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Lists","\n        ","Next: ","ds_list_find_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_list_delete"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1833"})